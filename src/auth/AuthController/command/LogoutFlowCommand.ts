import { CommandHandler } from './CommandHandler';
import { revokingToken, anonymousToken } from '../../api/AuthFlowToken';

export class LogoutFlowCommand extends CommandHandler {
  public async execute() {
    const token = this.authMonitor.Token;

    if (token === null) return new Error('TOKEN NULL');

    const result = await revokingToken(token);
    if (result instanceof Error) {
      return new Error('НЕУДЛОСЬ РАЗЛОГИНЕТСЯ!!');
    }
    this.authMonitor.RemoveAuthorized();

    const anonToken = await anonymousToken();
    if (anonToken instanceof Error) {
      return new Error('ПОЛУЧИЛОСЬ УБИТЬ ТОКЕН НО НЕ ПОЛУЧИЛОСЬ ПОЛУЧИТЬ НОНИМНЫЙ ТОКЕН!!!');
    }

    this.authMonitor.SetToken(anonToken);

    return true;
  }
}
