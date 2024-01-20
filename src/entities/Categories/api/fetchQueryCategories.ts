import { config } from '@/shared/api/config/cmConfig';
import type { CategoryPagedQueryResponseType } from '../types/CategoryPagedQueryResponseType';
import { http } from '@/auth';

const { apiUrl, project_key } = config;

const URL = `${apiUrl}/${project_key}/categories`;

export async function fetchQueryCategories() {
  try {
    const res = await http.get<CategoryPagedQueryResponseType>(URL);
    const resOK = res.status >= 200 && res.status < 300;
    if (resOK) {
      return res.data;
    }
    throw new Error();
  } catch (error) {
    return error as Error;
  }
}
