import { config } from '../config/cmConfig';
import { type TokenType, Token } from '../model/Token';
import { type ErrorTokenType, ErrorToken } from '../model/ErrorToken';

const { authUrl, client_id, secret } = config;

const URL = `${authUrl}/oauth/token`;
const encodedCredentials = btoa(`${client_id}:${secret}`);

export async function fetchRefreshTokenFlow(refreshToken: string) {
  const bodyContent = `grant_type=refresh_token&refresh_token=${refreshToken}`;

  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyContent
    });

    const data = await res.json();

    if (res.ok) {
      const token = new Token(data as TokenType);
      return token;
    } else {
      const result = new ErrorToken(data as ErrorTokenType);
      return result;
    }
  } catch (error) {
    return error as Error;
  }
}
