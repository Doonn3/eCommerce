import { config } from '@/shared/api/config/cmConfig';

import { type ProductProjectionPagedQueryResponseType, type ProductProjectionType } from '../types/ProductType';
import { http } from '@/auth/model/interceptors';

const { apiUrl, project_key } = config;

const URL = `${apiUrl}/${project_key}`;

export async function fetchQueryProductProjections(limit: number, offset: number) {
  const urlEndpoint = `${URL}/product-projections?limit=${limit}&offset=${offset}`;

  try {
    const res = await http.get<ProductProjectionPagedQueryResponseType>(urlEndpoint);
    const resOK = res.status === 200;
    if (resOK) {
      const result = res.data;
      return result;
    }
    throw new Error('QueryProductProjections Response was not OK');
  } catch (error) {
    return error as Error;
  }
}

export async function fetchGetProductProjectionByID(id: string) {
  const url = `${URL}/product-projections/${id}`;

  try {
    const res = await http.get<ProductProjectionType>(url);
    const resOK = res.status === 200;
    if (resOK) {
      const result = res.data;
      return result;
    }
    throw new Error('fetchGetProductProjectionByID Response was not OK');
  } catch (error) {
    return error as Error;
  }
}

export async function fetchQueryProductProjectionsByCategory(id: string) {
  const urlEndpoint = `${URL}/product-projections/search?filter=categories.id:"${id}"`;

  try {
    const res = await http.get<ProductProjectionPagedQueryResponseType>(urlEndpoint);
    const resOK = res.status === 200;
    if (resOK) {
      const result = res.data;
      return result;
    }
    throw new Error('QueryProductProjectionsByCategory Response was not OK');
  } catch (error) {
    return error as Error;
  }
}

export async function fetchProductProjectionSearch(language: string, text: string) {
  const url = `${URL}/product-projections/search?fuzzy=true&text.${language}=${text}`;

  try {
    const res = await http.get<ProductProjectionPagedQueryResponseType>(url);
    const resOk = res.status === 200;
    if (resOk) {
      return res.data;
    }

    throw new Error('fetchProductProjectionSearch');
  } catch (error) {
    return error as Error;
  }
}

type QueryFilterSearch = {
  categoryId?: string;
  manufacturer?: string[];
  price?: {
    currencyCode: string;
    centAmountRange: {
      min: number;
      max: number;
    };
  };
};
export async function fetchProductProjectionQueryFilterSearch(query: QueryFilterSearch) {
  const url = `${URL}/product-projections/search?${createQueryFilterSearch(query)}`;
  try {
    const res = await http.get<ProductProjectionPagedQueryResponseType>(url);
    const resOk = res.status === 200;
    if (resOk) {
      return res.data;
    }
    throw new Error('fetchProductProjectionQueryFilterSearch Not Ok');
  } catch (error) {
    return error as Error;
  }
}

function createQueryFilterSearch(query: QueryFilterSearch) {
  const queryCategoriesId = `filter=categories.id:"${query.categoryId}"`;
  if (query.manufacturer === undefined || query.manufacturer.length < 1) return queryCategoriesId;

  const arr = [...query.manufacturer];

  const result = arr
    .map((item) => {
      return `"${item}"`;
    })
    .join(',')
    .trim();

  const queryStr = `filter.query=variants.attributes.manufacturer:${result}`;
  return queryCategoriesId + '&' + queryStr;
}

// function createQueryFilterSearch(query: QueryFilterSearch) {
//   const arr: string[] = [];

//   if (query.categoryId !== undefined) {
//     arr.push(`filter.query=categories.id:subtree${query.categoryId}`);
//   }

//   if (query.priceCurrency !== undefined) {
//     arr.push(`filter.query=variants.price.currencyCode:"${query.priceCurrency}"`);
//   }

//   if (query.price !== undefined) {
//     arr.push(`filter.query=variants.price.centAmount:range(${query.price.min} to ${query.price.max})`);
//   }

//   for (let i = 1; i < arr.length; i += 1) {
//     const elem = arr[i];
//     arr[i] = `&${elem}`;
//   }

//   const result = arr.join('');

//   return result;
// }
