import type { AxiosRequestConfig } from 'axios';
import { AuthMonitor } from '../model/AuthMonitor';

export class CommandHandler {
  protected authMonitor: AuthMonitor;

  constructor(authMonitor: AuthMonitor) {
    this.authMonitor = authMonitor;
  }

  async ExecuteRequest(request: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    return request;
  }

  protected getHeaderAuthorization(accessToken: string) {
    return `Bearer ${accessToken}`;
  }
}
