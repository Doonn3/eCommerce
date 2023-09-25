import { config } from '../config/cmConfig';
import { type IntrospectionType, Introspection } from '../model/Introspection';
import { type ErrorTokenType, ErrorToken } from '../model/ErrorToken';

const { authUrl, client_id, secret } = config;

const URL = `${authUrl}/oauth/introspect`;
const encodedCredentials = btoa(`${client_id}:${secret}`);

export async function fetchIntrospectionToken(accessToken: string) {
  const bodyContent = `token=${accessToken}`;

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
      const result = data as IntrospectionType;
      return new Introspection(result);
    } else {
      const result = data as ErrorTokenType;
      return new ErrorToken(result);
    }
  } catch (error) {
    return error as Error;
  }
}
