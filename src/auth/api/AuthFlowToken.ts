import { axiosInstance } from '@/shared/api/axiosInstance';
import { config } from '@shared/api/config/cmConfig';
import type { TokenType } from '../types/Types';

const { authUrl, project_key, client_id, secret } = config;

const encodedCredentials = btoa(`${client_id}:${secret}`);

function getHeaders(encodedCredentials: string) {
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${encodedCredentials}`
  };
}

const headers = getHeaders(encodedCredentials);

export async function anonymousToken() {
  const query = `grant_type=client_credentials`;
  const url = `${authUrl}/oauth/${project_key}/anonymous/token?${query}`;

  try {
    const res = await axiosInstance.post<TokenType>(url, {}, { headers });
    const resOK = res.status === 200;
    if (resOK) {
      return res.data;
    }
    throw new Error('anonymousToken Not OK');
  } catch (error) {
    return error as Error;
  }
}

export async function passwordToken(email: string, password: string) {
  const query = `grant_type=password&username=${email}&password=${password}`;
  const url = `${authUrl}/oauth/${project_key}/customers/token?${query}`;

  try {
    const res = await axiosInstance.post<TokenType>(url, {}, { headers });
    const resOK = res.status === 200;
    if (resOK) {
      return res.data;
    }
    throw new Error('passwordToken Not OK');
  } catch (error) {
    return error as Error;
  }
}

export async function refreshToken(refreshToken: string) {
  const query = `grant_type=refresh_token&refresh_token=${refreshToken}`;
  const url = `${authUrl}/oauth/token?${query}`;

  try {
    const res = await axiosInstance.post<TokenType>(url, {}, { headers });
    const resOK = res.status === 200;
    if (resOK) {
      return res.data;
    }
    throw new Error('refreshToken Not OK');
  } catch (error) {
    return error as Error;
  }
}

export async function revokingToken(token: TokenType) {
  const query = `token=${token.access_token}&token_type_hint=access_token`;
  const url = `${authUrl}/oauth/token/revoke?${query}`;

  try {
    const res = await axiosInstance.post<boolean>(url, {}, { headers });
    const resOK = res.status === 200;
    if (resOK) {
      return true;
    }

    throw new Error('revokingToken Not OK');
  } catch (error) {
    return error as Error;
  }
}
