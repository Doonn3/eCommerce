import { config } from '@/shared/api/config/cmConfig';

import { type ProductProjectionPagedQueryResponseType, type ProductProjectionType } from '../types/ProductType';
import { http } from '@/auth';

const { apiUrl, project_key } = config;

const URL = `${apiUrl}/${project_key}`;

export async function fetchQueryProductProjections(limit: number, offset: number) {
  const urlEndpoint = `${URL}/product-projections?limit=${limit}&offset=${offset}`;

  try {
    const res = await http.get<ProductProjectionPagedQueryResponseType>(urlEndpoint);
    const resOK = res.status >= 200 && res.status < 300;
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
    const resOK = res.status >= 200 && res.status < 300;
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
    const resOK = res.status >= 200 && res.status < 300;
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
    const resOK = res.status >= 200 && res.status < 300;
    if (resOK) {
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
    const resOK = res.status >= 200 && res.status < 300;
    if (resOK) {
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
