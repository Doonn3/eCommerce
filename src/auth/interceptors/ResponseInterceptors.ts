import type { AxiosError, AxiosResponse } from 'axios';

import { authController } from '../AuthController/AuthController';
import axios from 'axios';

export async function ResponseInterceptor(response: AxiosResponse) {
  if (response.status === 401 && authController.AuthMonitor.Token !== null) {
    console.log(authController.AuthMonitor.Token, 'ЭТОТ ТОКЕН ПРОТУХ И ДОЛЖЕН БЫТЬ ОБНОВЛЕН');
    const newToken = await authController.RefreshTokenCommand.execute();
    if (!(newToken instanceof Error)) {
      console.log('ТОКЕН ОБНОВЛЕН!!');
      // Повторный запрос с новым токеном
      response.config.headers.Authorization = `Bearer ${newToken.access_token}`;
      const repeatResponse = await axios(response.config);
      console.log('ПОВТОРЕНИЯ ЗАПРОСА ПОСЛЕ ОБНОВЛЕНИЯ ТОКЕН!!');
      console.log(repeatResponse);
      return repeatResponse;
    }
  }
  return response;
}

export async function ErrorResponceInterceptor(error: AxiosError): Promise<any> {
  return Promise.reject(error);
}
