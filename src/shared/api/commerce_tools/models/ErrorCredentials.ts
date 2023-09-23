import { InvalidCredentialsType } from '../types/ErrorsType';

class ErrorCredentials implements InvalidCredentialsType {
  public code: string;
  public message: string;

  public constructor(error: InvalidCredentialsType) {
    this.code = error.code;
    this.message = error.message;
  }
}

export default ErrorCredentials;
