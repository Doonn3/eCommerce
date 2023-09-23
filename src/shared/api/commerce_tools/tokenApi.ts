import client from './common/client.config';
import ErrorToken from './models/ErrorToken';
import Token from './models/Token';
import { ErrorTokenType } from './types/ErrorsType';
import { TokenType } from './types/Types';

export async function clientFlowToken() {
  try {
    const url = `${client.authUrl}/oauth/token`;
    const encodedCredentials = btoa(`${client.client_id}:${client.secret}`);

    const bodyContent = `grant_type=client_credentials&scope=${client.scope.manage_customers}:${client.project_key}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedCredentials}`
      },
      body: bodyContent
    });

    const data = await res.json();

    if (res.status) {
      const result: TokenType = data;
      return new Token(result, 'client');
    } else {
      const result: ErrorTokenType = data;
      return new ErrorToken(result);
    }
  } catch (error) {
    return error as Error;
  }
}

// https://{auth_host}/oauth/{projectKey}/customers/token
// body: grant_type=password&username={email}&password={password}&scope={scope}
export async function passwordFlowToken(email: string, password: string) {
  const url = `${client.authUrl}/oauth/${client.project_key}/customers/token`;
  try {
    const encodedCredentials = btoa(`${client.client_id}:${client.secret}`);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=password&username=${email}&password=${password}`
    });
    const result = await res.json();

    if (res.ok) {
      const token = new Token(result as TokenType, 'client');
      return token;
    } else {
      const err = new ErrorToken(result as ErrorTokenType);
      return err;
    }
  } catch (error) {
    return null;
  }
}

type AccessTokenType = 'client' | 'anonymous';

export async function refreshTokenFlow(refreshToken: string, accessTokenType: AccessTokenType) {
  const url = `${client.authUrl}/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`;

  try {
    const encodedCredentials = btoa(`${client.client_id}:${client.secret}`);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const data = await res.json();

    if (res.ok) {
      const token = new Token(data as TokenType, accessTokenType);
      return token;
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

export async function fetchAnonymousToken() {
  const scope =
    '&scope=view_products:createelementteam view_orders:createelementteam manage_my_orders:createelementteam';

  const url = `${client.authUrl}/oauth/${client.project_key}/anonymous/token?grant_type=client_credentials${scope}`;
  console.log(url);
  try {
    const encodedCredentials = btoa(`${client.client_id}:${client.secret}`);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedCredentials}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      const token = new Token(data as TokenType, 'anonymous');
      return token;
    } else {
      return new ErrorToken(data as ErrorTokenType);
    }
  } catch (error) {
    return error as Error;
  }
}

export async function introspectionToken(accessToken: string) {
  const url = `${client.authUrl}/oauth/introspect?token=${accessToken}`;

  try {
    const encodedCredentials = btoa(`${client.client_id}:${client.secret}`);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const data = await res.json();

    if (res.ok) {
      return data.active as boolean;
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

export async function revokingToken(token: TokenType) {
  try {
    const url = `${client.authUrl}/oauth/token/revoke`;
    const encodedCredentials = btoa(`${client.client_id}:${client.secret}`);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedCredentials}`
      },
      body: `token=${token.access_token}&token_type_hint=access_token`
      // body: `token=${token}&token_type_hint=access_token | refresh_token`
    });

    if (res.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return null;
  }
}
