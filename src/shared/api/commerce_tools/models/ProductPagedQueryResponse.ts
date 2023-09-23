import { ProductPagedQueryResponseType } from '../endpoints/types/ProductsApiType';

class ProductPagedQueryResponse<T> implements ProductPagedQueryResponseType<T> {
  public limit: number;
  public offset: number;
  public count: number;
  public total?: number | undefined;
  public results: T[];

  public constructor(_products: ProductPagedQueryResponseType<T>) {
    this.limit = _products.limit;
    this.offset = _products.offset;
    this.count = _products.count;
    this.total = _products.total;
    this.results = _products.results;
  }
}

export default ProductPagedQueryResponse;
