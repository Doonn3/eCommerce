import { config } from '@/shared/api/config/cmConfig';
import { useFetch } from '@shared/lib/customFetch';

import { type ProductProjectionPagedQueryResponseType } from '../model/ProductType';
import { http } from '@/auth/model/interceptors';

const { apiUrl, project_key } = config;

const URL = `${apiUrl}/${project_key}`;

export async function fetchQueryProductProjections(limit: number, offset: number) {
  const urlEndpoint = `${URL}/product-projections?limit=${limit}&offset=${offset}`;

  console.log('Сделал Запрос на получения всех товарав');

  try {
    const res = await http.get<ProductProjectionPagedQueryResponseType>(urlEndpoint);
    const responseOK = res.status === 200 && res.statusText === 'OK';
    if (responseOK) {
      const result = res.data;
      return result;
    }
    throw new Error('QueryProductProjections Response was not OK');
  } catch (error) {
    return error as Error;
  }
}

export async function fetchQueryProductProjectionsByCategory(id: string) {
  const urlEndpoint = `${URL}/product-projections/search?filter=categories.id:"${id}"`;

  try {
    const res = await http.get<ProductProjectionPagedQueryResponseType>(urlEndpoint);
    const responseOK = res.status === 200 && res.statusText === 'OK';
    if (responseOK) {
      const result = res.data;
      return result;
    }
    throw new Error('QueryProductProjectionsByCategory Response was not OK');
  } catch (error) {
    return error as Error;
  }
}

// DEPRECATED
// export async function fetchQueryProductProjections(limit: number, offset: number) {
//   const urlEndpoint = `${URL}/product-projections?limit=${limit}&offset=${offset}`;

//   const { isError, isLoading, data } = await useFetch<ProductProjectionPagedQueryResponseType>({
//     url: urlEndpoint
//   });

//   return { isError, isLoading, data };
// }

// export async function fetchQueryProductProjectionsByCategory(id: string) {
//   const urlEndpoint = `${URL}/product-projections/search?filter=categories.id:"${id}"`;

//   const { isError, isLoading, data } = await useFetch<ProductProjectionPagedQueryResponseType>({
//     url: urlEndpoint
//   });

//   return { isError, isLoading, data };
// }
