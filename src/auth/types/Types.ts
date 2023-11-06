type InvalidCredentialsType = {
  code: string;
  message: string;
};

export type TokenType = {
  access_token: string;
  expires_in: number;
  scope: string;
  refresh_token: string;
  token_type: string;
};

export type IntrospectionType = {
  active: boolean;
  scope: string;
  exp: number;
  client_id: string;
};

export type ErrorTokenType = {
  error: string;
  error_description: string;
  errors: InvalidCredentialsType[];
  message: string;
  statusCode: number;
};
