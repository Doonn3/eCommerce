import { useFetch } from '@shared/lib/customFetch';
import { config } from '@shared/api/config/cmConfig';
import { type FacetResponse } from '../model/TermFacetResultType';

const END_POINT = `${config.apiUrl}/${config.project_key}/product-projections`;

export async function fetchProductManufacturers(categoriID: string) {
  const searchFilter = `search?filter=categories.id:"${categoriID}"`;
  const facet = `facet=variants.attributes.manufacturer`;
  const url = `${END_POINT}/${searchFilter}&${facet}`;

  const { data, isError, isLoading } = await useFetch<FacetResponse>({ url });

  return { data, isError, isLoading };
}
