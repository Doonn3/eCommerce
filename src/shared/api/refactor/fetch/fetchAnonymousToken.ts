import { config } from '../config/cmConfig';
import { type TokenType, Token } from '../model/Token';
import { type ErrorTokenType, ErrorToken } from '../model/ErrorToken';

const { authUrl, client_id, project_key, scope, secret } = config;

const URL = `${authUrl}/oauth/${project_key}/anonymous/token`;
const encodedCredentials = btoa(`${client_id}:${secret}`);

export async function fetchAnonymousToken() {
  const { view_orders, manage_my_orders, view_products } = scope;

  const scopes = `${view_products}:${project_key} ${view_orders}:${project_key} ${manage_my_orders}:${project_key}`;

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

    const data = await res.json();

    if (res.ok) {
      const token = new Token(data as TokenType);
      return token;
    } else {
      return new ErrorToken(data as ErrorTokenType);
    }
  } catch (error) {
    return error as Error;
  }
}
