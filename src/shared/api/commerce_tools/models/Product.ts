import ProductType from '../endpoints/types/ProductsApiType';

class Product {
  public Data: ProductType | null;

  constructor(_product: ProductType) {
    this.Data = _product;
  }
}

export default Product;
