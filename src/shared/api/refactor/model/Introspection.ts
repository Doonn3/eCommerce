export type IntrospectionType = {
  active: boolean;
  scope: string;
  exp: number;
  client_id: string;
};

export class Introspection {
  private data: IntrospectionType;

  public get Data() {
    return this.data;
  }

  constructor(_data: IntrospectionType) {
    this.data = _data;
  }
}
