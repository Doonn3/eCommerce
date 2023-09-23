import { CartType } from '../types/CartType/CartType';

class Cart {
  public Data: CartType;

  constructor(_data: CartType) {
    this.Data = _data;
  }
}

export default Cart;
