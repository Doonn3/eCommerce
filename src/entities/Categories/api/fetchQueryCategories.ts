import { useFetch } from '@shared/lib/customFetch';
import { config } from '../../../shared/api/config/cmConfig';
import type { CategoryPagedQueryResponseType } from '../types/CategoryPagedQueryResponseType';
import { http } from '../../../auth/model/interceptors';

const { apiUrl, project_key, scope } = config;

const URL = `${apiUrl}/${project_key}/categories`;
// const URL = `${apiUrl}/${project_key}/categories/search?filter=categories.id:"8ce96d24-0f50-44a6-9124-49bc51a2e80a"`;

const SCOPES = `${scope.view_products} ${scope.view_categories}`;

export async function fetchQueryCategories() {
  try {
    const res = await http.get<CategoryPagedQueryResponseType>(URL);
    const resOk = res.status === 200;
    if (resOk) {
      return res.data;
    }
    throw new Error();
  } catch (error) {
    return error as Error;
  }
}

// export async function fetchQueryCategories() {
//   const { data, isError, isLoading } = await useFetch<CategoryPagedQueryResponseType>({ url: URL });

//   return { isError, isLoading, data };
// }
