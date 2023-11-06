import type { AxiosError, AxiosResponse } from 'axios';

export function ResponseInterceptor(response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> {
  return response;
}

export async function ErrorResponceInterceptor(error: AxiosError): Promise<any> {
  // Обновляем токен если код 401 и есть токен рефрешь
  // И делаем Сразу Повторный Запрос
  // if (error.response && error.response.status === 401) {
  //   const token = auth.Token;
  //   if (token !== null) {
  //     const res = await refreshToken(token.refresh_token);

  //     if (res instanceof Error) {
  //       const rev = await revokingToken(token);
  //       if (rev === true) {
  //         auth.RemoveAuthorized();
  //       }
  //       return;
  //     }

  //     if (error.config) {
  //       error.config.headers['Authorization'] = `${res.token_type} ${res.access_token}`;
  //       auth.SetToken(res);
  //       return await http(error.config);
  //     }
  //   }
  // }

  // if (error.response) {
  //   console.warn(error.response);
  // }

  // Если ошибка не 401, просто отклоните обещание
  return Promise.reject(error);
}
