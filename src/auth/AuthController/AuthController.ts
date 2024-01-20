import { AnonimusCommand } from './command/AnonimusCommand';
import { RefreshCommand } from './command/RefreshCommand';
import { RevokingCommand } from './command/RevokingCommand';
import { PasswordFlowCommand } from './command/PasswordFlowCommand';
import { AuthMonitor } from './model/AuthMonitor';

import { LogoutFlowCommand } from './command/LogoutFlowCommand';

export class Auth {
  private auth = new AuthMonitor();

  public get AuthMonitor() {
    return this.auth;
  }

  public AnonTokenCommand = new AnonimusCommand(this.auth);

  public RefreshTokenCommand = new RefreshCommand(this.auth);

  public RevokeTokenCommand = new RevokingCommand(this.auth);

  public PasswordFlowCommand = new PasswordFlowCommand(this.auth);
  public LogoutFlowCommand = new LogoutFlowCommand(this.auth);
}

export const authController = new Auth();
