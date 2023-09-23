import client from '../common/client.config';
import Product from '../models/Product';
import ProductPagedQueryResponse from '../models/ProductPagedQueryResponse';
import ProductType, {
  ProductPagedQueryResponseType,
  ProductProjection
} from './types/ProductsApiType';

export async function queryProjectionProducts(
  accessToken: string,
  queryParams: string /*queryParams*/
) {
  const url = `${client.apiUrl}/${client.project_key}/product-projections/${queryParams}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      const result = data as ProductPagedQueryResponseType<ProductProjection>;
      return new ProductPagedQueryResponse(result);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}
// import ProductType from './types/ProductsApiType';

export async function queryProducts(accessToken: string) {
  const url = `${client.apiUrl}/${client.project_key}/products`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      const result = data as ProductPagedQueryResponseType<Product>;
      return new ProductPagedQueryResponse(result);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

export async function fetchGetProductByID(accessToken: string, id: string) {
  const url = `${client.apiUrl}/${client.project_key}/products/${id}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      return new Product(data as ProductType);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}
