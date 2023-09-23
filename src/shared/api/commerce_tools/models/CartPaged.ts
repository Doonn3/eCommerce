import { CartPagedQueryResponse } from '../types/CartType/CartType';

class CartPaged {
  public Data: CartPagedQueryResponse;

  constructor(_data: CartPagedQueryResponse) {
    this.Data = _data;
  }
}

export default CartPaged;
