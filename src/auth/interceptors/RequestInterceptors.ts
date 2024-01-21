import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

import { authController } from '../AuthController/AuthController';

export async function RequestInterceptor(request: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> {
  console.log('Попытка получить анонимный токен');

  const result = await authController.AnonTokenCommand.ExecuteRequest(request);
  if (result) {
    request = result as InternalAxiosRequestConfig;
  }

  console.log(request.headers);

  return request;
}

export async function ErrorRequestInterceptor(error: AxiosError) {
  return Promise.reject(error);
}
