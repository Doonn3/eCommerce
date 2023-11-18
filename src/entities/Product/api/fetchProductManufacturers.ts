import { config } from '@shared/api/config/cmConfig';
import { type FacetResponse } from '../types/TermFacetResultType';
import { http } from '@/auth/model/interceptors';

const END_POINT = `${config.apiUrl}/${config.project_key}/product-projections`;

export async function fetchProductManufacturers(categoriID: string) {
  const searchFilter = `search?filter.query=categories.id:"${categoriID}"`;
  const facet = `facet=variants.attributes.manufacturer`;
  const url = `${END_POINT}/${searchFilter}&${facet}`;

  try {
    const res = await http.get<FacetResponse>(url);
    const resOk = res.status === 200;
    if (resOk) {
      return res.data;
    }
    throw new Error();
  } catch (error) {
    return error as Error;
  }
}
