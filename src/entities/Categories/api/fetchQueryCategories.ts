import { useFetch } from '@shared/lib/customFetch';
import { config } from '../../../shared/api/config/cmConfig';
import type { CategoryPagedQueryResponseType } from '../types/CategoryPagedQueryResponseType';

const { apiUrl, project_key, scope } = config;

const URL = `${apiUrl}/${project_key}/categories`;
// const URL = `${apiUrl}/${project_key}/categories/search?filter=categories.id:"8ce96d24-0f50-44a6-9124-49bc51a2e80a"`;

const SCOPES = `${scope.view_products} ${scope.view_categories}`;

export async function fetchQueryCategories() {
  const { data, isError, isLoading } = await useFetch<CategoryPagedQueryResponseType>({ url: URL });

  return { isError, isLoading, data };
}
