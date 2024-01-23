import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

import { authController } from '../AuthController/AuthController';

export async function RequestInterceptor(request: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> {
  const result = await authController.AnonTokenCommand.ExecuteRequest(request);
  if (result) {
    request = result as InternalAxiosRequestConfig;
  }

  return request;
}

export async function ErrorRequestInterceptor(error: AxiosError) {
  return Promise.reject(error);
}
