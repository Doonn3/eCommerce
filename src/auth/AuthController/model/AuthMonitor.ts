import { type Ref, ref } from 'vue';
import type { TokenType } from '../../types/Types';
import { revokingToken } from '../../api/AuthFlowToken';

export class AuthMonitor {
  private token: TokenType | null;
  public IsAuthorized: Ref<boolean>;

  public get Token() {
    return this.token;
  }

  constructor() {
    this.token = this.loadToken();
    this.IsAuthorized = ref(this.loadAuthorized());
  }

  private saveToken() {
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  private loadToken() {
    const result = localStorage.getItem('token');
    if (result === null) return null;
    return JSON.parse(result) as TokenType;
  }

  private saveAuthorized() {
    localStorage.setItem('authorized', JSON.stringify(this.IsAuthorized.value));
  }

  private loadAuthorized() {
    const result = localStorage.getItem('authorized');
    if (result === null) return false;
    return JSON.parse(result) as boolean;
  }

  public SetToken(_token: TokenType) {
    this.token = _token;
    this.saveToken();
  }

  public Authorized(_token: TokenType) {
    this.token = _token;
    this.IsAuthorized.value = true;
    this.saveToken();
    this.saveAuthorized();
  }

  public RemoveAuthorized() {
    if (this.token === null) return;
    revokingToken(this.token).then((success) => {
      if (success === true) {
        this.token = null;
        this.IsAuthorized.value = false;
        localStorage.removeItem('token');
        localStorage.removeItem('authorized');
      }
    });
  }
}
