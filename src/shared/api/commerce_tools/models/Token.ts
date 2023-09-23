import { TokenType } from '../types/Types';
type AccessTokenType = 'anonymous' | 'client';

class Token implements TokenType {
  access_token: string = '';
  expires_in: number = 0;
  scope: string = '';
  refresh_token?: string | undefined;
  token_type: string = '';
  accessTokenType: AccessTokenType;

  constructor(type: TokenType, accessTokenType: AccessTokenType) {
    this.access_token = type.access_token;
    this.expires_in = type.expires_in;
    this.scope = type.scope;
    this.refresh_token = type.refresh_token;
    this.token_type = type.token_type;

    this.accessTokenType = accessTokenType;
  }
}

export default Token;
