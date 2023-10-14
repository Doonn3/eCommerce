import { useFetch } from '@shared/lib/hooks/composables/useFetch';
import { config } from '../../../shared/api/refactor/config/cmConfig';
import type { CategoryPagedQueryResponseType } from '../types/CategoryPagedQueryResponseType';

const { apiUrl, project_key, scope } = config;

const URL = `${apiUrl}/${project_key}/categories`;
// const URL = `${apiUrl}/${project_key}/categories/search?filter=categories.id:"8ce96d24-0f50-44a6-9124-49bc51a2e80a"`;

const SCOPES = `${scope.view_products} ${scope.view_categories}`;

export async function fetchQueryCategories() {
  const { fetchData, data, isError, isLoading, message } =
    useFetch<CategoryPagedQueryResponseType>(URL);

  await fetchData();

  return { isError, isLoading, message, data };
}
