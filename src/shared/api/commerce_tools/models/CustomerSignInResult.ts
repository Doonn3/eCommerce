import { CartType } from '../types/CartType/CartType';
import { CustomerSignInResultType, CustomerType } from '../types/Types';

class CustomerSignInResult implements CustomerSignInResultType {
  public customer: CustomerType;
  public cart: CartType;

  public constructor(data: CustomerSignInResultType) {
    this.customer = data.customer;
    this.cart = data.cart;
  }
}

export default CustomerSignInResult;
