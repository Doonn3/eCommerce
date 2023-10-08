import { useFetch } from '@shared/lib/hooks/composables/useFetch';
import client from '@shared/api/commerce_tools/common/client.config';
import { type FacetResponse } from '../model/TermFacetResultType';

const END_POINT = `${client.apiUrl}/${client.project_key}/product-projections`;

export async function fetchProductManufacturers(categoriID: string) {
  const searchFilter = `search?filter=categories.id:"${categoriID}"`;
  const facet = `facet=variants.attributes.manufacturer`;
  const url = `${END_POINT}/${searchFilter}&${facet}`;

  const { data, fetchData, isError, isLoading, message } = useFetch<FacetResponse>(url);

  await fetchData();
  return { data, isError, isLoading, message };
}
