import { config } from '@shared/api/refactor/config/cmConfig';
import { useFetch } from '@shared/lib/hooks/composables/useFetch';

import { type ProductProjectionPagedQueryResponseType } from '../model/ProductType';

const { apiUrl, project_key } = config;

const URL = `${apiUrl}/${project_key}`;

export async function fetchQueryProductProjections(limit: number, offset: number) {
  const urlEndpoint = `${URL}/product-projections?limit=${limit}&offset=${offset}`;

  const { fetchData, isError, isLoading, message, data } =
    useFetch<ProductProjectionPagedQueryResponseType>(urlEndpoint);

  await fetchData();

  return { isError, isLoading, message, data };
}

export async function fetchQueryProductProjectionsByCategory(id: string) {
  const urlEndpoint = `${URL}/product-projections/search?filter=categories.id:"${id}"`;

  const { fetchData, isError, isLoading, message, data } =
    useFetch<ProductProjectionPagedQueryResponseType>(urlEndpoint);

  await fetchData();

  return { isError, isLoading, message, data };
}
