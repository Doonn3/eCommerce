export type TokenType = {
  access_token: string;
  expires_in: number;
  scope: string;
  refresh_token?: string;
  token_type: string;
};

export class Token {
  private data: TokenType;

  public get Data() {
    return this.data;
  }

  public set Data(_data: TokenType) {
    this.data = _data;
  }

  constructor(type: TokenType) {
    this.data = type;
  }
}
