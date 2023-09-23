export interface InvalidCredentialsType {
  code: string;
  message: string;
}

export interface ErrorTokenType {
  error: string;
  error_description: string;
  errors: InvalidCredentialsType[];
  message: string;
  statusCode: number;
}
