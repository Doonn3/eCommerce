import { config } from '../config/cmConfig';
import { type TokenType, Token } from '../model/Token';
import { type ErrorTokenType, ErrorToken } from '../model/ErrorToken';

const { authUrl, client_id, project_key, scope, secret } = config;

const URL = `${authUrl}/oauth/token`;
const encodedCredentials = btoa(`${client_id}:${secret}`);

export async function fetchClientFlowToken() {
  const { create_anonymous_token, manage_customers } = scope;
  const scopes = `${create_anonymous_token}:${project_key} ${manage_customers}:${project_key}`;
  const bodyContent = `grant_type=client_credentials&scope=${scopes}`;

  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedCredentials}`
      },
      body: bodyContent
    });

    if (res.status) {
      const result = (await res.json()) as TokenType;

      return new Token(result);
    } else {
      const result = (await res.json()) as ErrorTokenType;

      return new ErrorToken(result);
    }
  } catch (error) {
    return error as Error;
  }
}
