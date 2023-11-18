import { anonymousToken, passwordToken } from '../api/AuthFlowToken';
import { auth } from './AuthMonitor';

export async function tokenFlow() {
  let token = auth.Token;
  console.log(token);
  if (token === null) {
    const res = await anonymousToken();

    token = res instanceof Error ? null : res;
    if (token) {
      auth.SetToken(token);
      return token;
    }
  }

  return token;
}

export async function passwordFlow(email: string, password: string) {
  let token = auth.Token;
  const res = await passwordToken(email, password);
  if (res instanceof Error) return token;

  token = res;

  if (token) {
    auth.Authorized(token);
  }

  return token;
}
