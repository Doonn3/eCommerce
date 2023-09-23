import client from './common/client.config';
import { DiscountCodePagedQueryResponse } from './types/DiscountType/DiscountType';

export async function fetchQueryDiscountCodes(accessToken: string) {
  const url = `${client.apiUrl}/${client.project_key}/discount-codes`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const result = await res.json();

    if (res.ok) {
      return result as DiscountCodePagedQueryResponse;
    } else {
      return result.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}
