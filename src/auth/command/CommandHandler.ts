import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthMonitor, auth } from '../model/AuthMonitor';
import { anonymousToken, passwordToken, refreshToken, revokingToken } from '../api/AuthFlowToken';
import type { TokenType } from '../types/Types';

interface IContainer {
  request: AxiosRequestConfig;
  responce?: AxiosResponse;
}

class CommandHandler {
  private nextCommand: CommandHandler | null = null;
  protected authMonitor: AuthMonitor;

  constructor(authMonitor: AuthMonitor) {
    this.authMonitor = authMonitor;
  }

  setNext(handler: CommandHandler): CommandHandler {
    this.nextCommand = handler;
    return handler;
  }

  async Execute(data: IContainer): Promise<IContainer | null> {
    if (this.nextCommand) {
      return this.nextCommand.Execute(data);
    }
    return null; // Возврат значения по умолчанию или обработка завершения цепочки
  }

  protected getHeaderAuthorization(accessToken: string) {
    return `Bearer ${accessToken}`;
  }
}

class AnonimusCommand extends CommandHandler {
  private anonTokenPromise: Promise<TokenType | Error> | null = null;

  async Execute(data: IContainer): Promise<IContainer | null> {
    let token = this.authMonitor.Token;

    if (token === null) {
      console.log('Токен NULL');
      if (!this.anonTokenPromise) {
        this.anonTokenPromise = anonymousToken();
      }

      const result = await this.anonTokenPromise;

      if (result instanceof Error) {
        console.error('НЕ СМОГ ПОЛУЧИТЬ АНОНИМНЫЙ ТОКЕН ХЗ ПОЧЕМУ');
        return data;
      } else {
        token = result;
        this.authMonitor.SetToken(token);
        this.anonTokenPromise = null;
        console.log(token);
      }
    }

    if (data.request.headers) {
      data.request.headers.Authorization = this.getHeaderAuthorization(token.access_token);
    }

    return data;
  }
}

class PasswordCommand extends CommandHandler {
  Execute(data: IContainer): IContainer | null {}
}

class RefreshCommand extends CommandHandler {
  Execute(data: IContainer): IContainer | null {}
}

class RevokingCommand extends CommandHandler {
  Execute(data: IContainer): IContainer | null {}
}

export class Auth {
  private auth = auth;

  private anonTokenCommand = new AnonimusCommand(this.auth);
  private passwordTokenCommand = new PasswordCommand(this.auth);
  private refreshTokenCommand = new RefreshCommand(this.auth);

  private revokeTokenCommand = new RevokingCommand(this.auth);

  private requestQueue: AxiosRequestConfig[] = [];

  public async request(request: AxiosRequestConfig) {
    console.log('КАКОЙ КОМПОНЕНТ ДЕЛАЕТ ЗАПРОС', request.url);
    if (request.metadata?.type === 'login' && request.metadata.data) {
      // Попытка Залогинетца
      console.log('Попытка Залогинетца');
      return request;
    } else {
      console.log('Попытка получить анонимный токен');
      const result = await this.anonTokenCommand.Execute({ request: request });
      if (result) {
        request = result.request;
      }
    }

    return request;
  }

  public responce(responce: AxiosResponse) {
    if (responce.config.metadata?.type === 'signup' && responce.config.metadata.data) {
      // Попытка Зарегестрироватся
      console.log('Попытка Зарегестрироватся');
      return responce;
    }

    if (responce.config.metadata?.type === 'logout' && responce.config.metadata.data) {
      console.log('Попытка ЛОГОУТА');
      return responce;
    }

    if (responce.status === 401 && this.auth.Token !== null) {
      console.log(this.auth.Token, 'ЭТОТ ТОКЕН ПРОТУХ И ДОЛЖЕН БЫТЬ ОБНОВЛЕН');
    }

    return responce;
  }

  private headerAuthorixation(accessToken: string) {
    return `Bearer ${accessToken}`;
  }

  /*  
    Эта функция отробатывает когда пользоваетль зашел в первый раз на сайт у него нету анонимного токина
    Он получает анонимный токен и записывает в AuthMonitor 
  */

  /*
    Эта Команда отвечает когда пользователь зашел на сайт уже не первый раз и есть анонимный токен
    но он протух и нужно сделать обновления протухшего анонимного токена
  */

  // ШАГ 1 Если токена нету
  // public async command1() {
  //   let token = this.auth.Token;

  //   if (token === null) {
  //     const result = await anonymousToken();
  //     if (result instanceof Error) {
  //       console.error('ЧТО ТО ПОШЛО НЕ ТАК и НЕ СМОГ ПОЛУЧИТЬ АНОНИМНЫЙ ТОКЕН');
  //       return result;
  //     } else {
  //       token = result;
  //       this.auth.SetToken(token);
  //       return token;
  //     }
  //   }

  //   return token;
  // }

  // ШАГ 2 Если токен есть но он протух
  // public async command2() {
  //   let token = this.auth.Token;

  //   if (token === null) {
  //     console.error('ПОЧЕМУТО ТОКЕН ПУСТОЙ ТАКОГО НЕ ДОЛЖНО БЫТЬ');
  //     return new Error('ПОЧЕМУТО ТОКЕН ПУСТОЙ ТАКОГО НЕ ДОЛЖНО БЫТЬ');
  //   }

  //   const result = await refreshToken(token.refresh_token);

  //   if (result instanceof Error) {
  //     console.error('ЧТО ТО ПОШЛО НЕ ТАК и НЕ СМОГ ОБНОВИТЬ ТОКЕН ХМММММММ!!!!!');
  //     return result;
  //   } else {
  //     token = result;
  //     this.auth.SetToken(token);
  //     return token;
  //   }
  // }
}

export const authController = new Auth();
