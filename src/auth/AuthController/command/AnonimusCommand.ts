import type { AxiosRequestConfig } from 'axios';
import { anonymousToken } from '../../api/AuthFlowToken';
import type { TokenType } from '../../types/Types';
import { CommandHandler } from './CommandHandler';

export class AnonimusCommand extends CommandHandler {
  private anonTokenPromise: Promise<TokenType | Error> | null = null;

  public async ExecuteRequest(request: AxiosRequestConfig<any>): Promise<AxiosRequestConfig> {
    let token = this.authMonitor.Token;

    if (token === null) {
      console.log('Токен NULL');
      if (!this.anonTokenPromise) {
        this.anonTokenPromise = anonymousToken();
      }

      const result = await this.anonTokenPromise;

      if (result instanceof Error) {
        console.error('НЕ СМОГ ПОЛУЧИТЬ АНОНИМНЫЙ ТОКЕН ХЗ ПОЧЕМУ');
        return request;
      } else {
        token = result;
        this.authMonitor.SetToken(token);
        this.anonTokenPromise = null;
        console.log(token);
      }
    }

    if (request?.headers) {
      request.headers.Authorization = this.getHeaderAuthorization(token.access_token);
    }

    return request;
  }
}
