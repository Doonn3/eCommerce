import axios from 'axios';

import { ErrorRequestInterceptor, RequestInterceptor } from './RequestInterceptors';
import { ResponseInterceptor } from './ResponseInterceptors';

type MetaDataType = {
  type: 'login' | 'signup' | 'logout';
  data?: {
    email: string;
    password: string;
  };
};

declare module 'axios' {
  export interface AxiosRequestConfig {
    metadata?: MetaDataType;
  }

  export interface AxiosResponse {
    metadata?: MetaDataType;
  }
}

export const http = axios.create({
  validateStatus: function (status) {
    return status < 500; // Разрешить, если код состояния меньше 500
  }
});

http.interceptors.request.use(RequestInterceptor, ErrorRequestInterceptor);

http.interceptors.response.use(ResponseInterceptor);
