import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { passwordFlow, tokenFlow } from './AuthFlow';

function requestLogin(request: InternalAxiosRequestConfig) {
  if (request.metadata) {
    const { type, data } = request.metadata;
    if (type === 'login' && data) {
      return { isLogin: true, data };
    }
  }
  return { isLogin: false };
}

export async function RequestInterceptor(request: InternalAxiosRequestConfig) {
  let token = await tokenFlow();

  const requestIsLogin = requestLogin(request);
  if (requestIsLogin.isLogin && requestIsLogin.data) {
    const { email, password } = requestIsLogin.data;
    token = await passwordFlow(email, password);
    console.log(token);
  }

  if (token) {
    request.headers.Authorization = `Bearer ${token.access_token}`;
  }

  return request;
}

export async function ErrorRequestInterceptor(error: AxiosError) {
  return Promise.reject(error);
}
