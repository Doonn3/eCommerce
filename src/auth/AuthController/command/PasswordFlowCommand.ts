import { CommandHandler } from './CommandHandler';

import { passwordToken } from '../../api/AuthFlowToken';

export class PasswordFlowCommand extends CommandHandler {
  public async execute(email: string, password: string) {
    const passtoken = await passwordToken(email, password);

    if (passtoken instanceof Error) {
      return new Error(`НЕ ПОЛУЧИЛОСЬ ПОЛУЧИТЬ ТОКЕН ПОРОЛЯ!!! <<PasswordFlowCommand>>`);
    }

    this.authMonitor.Authorized(passtoken);

    return passtoken;
  }
}
