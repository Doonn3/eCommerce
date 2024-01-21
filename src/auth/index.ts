import axios from 'axios';
import { ErrorRequestInterceptor, RequestInterceptor } from './interceptors/RequestInterceptors';
import { ResponseInterceptor, ErrorResponceInterceptor } from './interceptors/ResponseInterceptors';

export { authController } from './AuthController/AuthController';

declare module 'axios' {
  export interface AxiosRequestConfig {
    metadata?: {
      userLogn: boolean;
    };
  }
}

export const http = axios.create({
  validateStatus: function (status) {
    return status < 500; // Разрешить, если код состояния меньше 500
  }
});

http.interceptors.request.use(RequestInterceptor, ErrorRequestInterceptor);

http.interceptors.response.use(ResponseInterceptor, ErrorResponceInterceptor);
