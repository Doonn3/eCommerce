import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { passwordFlow, tokenFlow } from './AuthFlow';
import { Auth, authController } from '../command/CommandHandler';

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
  return authController.request(request);
  // let token = await tokenFlow();
  // const requestIsLogin = requestLogin(request);
  // if (requestIsLogin.isLogin && requestIsLogin.data) {
  //   const { email, password } = requestIsLogin.data;
  //   console.log('Сработал REQUEST,, PASSWORD FLOW');
  //   token = await passwordFlow(email, password);
  // }
  // if (token) {
  //   request.headers.Authorization = `Bearer ${token.access_token}`;
  // }
  // return request;
}

export async function ErrorRequestInterceptor(error: AxiosError) {
  return Promise.reject(error);
}
