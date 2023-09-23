import { CustomerType } from '../types/Types';

class Customer {
  Data: CustomerType;

  constructor(_data: CustomerType) {
    this.Data = _data;
  }
}

export default Customer;
