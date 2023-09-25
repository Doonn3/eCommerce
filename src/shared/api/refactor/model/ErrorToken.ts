type InvalidCredentialsType = {
  code: string;
  message: string;
};

export type ErrorTokenType = {
  error: string;
  error_description: string;
  errors: InvalidCredentialsType[];
  message: string;
  statusCode: number;
};

export class ErrorToken {
  private data: ErrorTokenType;

  public get Data() {
    return this.data;
  }

  constructor(type: ErrorTokenType) {
    this.data = type;
  }
}
