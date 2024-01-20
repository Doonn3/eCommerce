import { CommandHandler } from './CommandHandler';

import { refreshToken } from '../../api/AuthFlowToken';

export class RefreshCommand extends CommandHandler {
  public async execute() {
    const token = this.authMonitor.Token;
    if (token === null) return new Error('TOKEN NULL');

    const newToken = await refreshToken(token.refresh_token);

    if (newToken instanceof Error) {
      return new Error(`Ошибка От Сервера, <<RefreshCommand>>, <<${newToken.message}>>`);
    }

    this.authMonitor.SetToken(token);

    return token;
  }
}
