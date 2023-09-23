import { ErrorTokenType, InvalidCredentialsType } from '../types/ErrorsType';

class ErrorToken implements ErrorTokenType {
  public error: string = '';
  public error_description: string = '';
  public errors: InvalidCredentialsType[] = [];
  public message: string = '';
  public statusCode: number = 0;

  constructor(type: ErrorTokenType) {
    this.error = type.error;
    this.error_description = type.error_description;
    this.errors = type.errors;
    this.message = type.message;
    this.statusCode = type.statusCode;
  }
}

export default ErrorToken;
