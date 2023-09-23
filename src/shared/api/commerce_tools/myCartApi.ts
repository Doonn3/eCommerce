import client from './common/client.config';
import Cart from './models/Cart';
import CartPaged from './models/CartPaged';
import { CartPagedQueryResponse, CartType } from './types/CartType/CartType';
import { MyCartDraft } from './types/MyCartApi/MyCartType';
import { Actions } from './types/UpdateCartType';

export async function fetchQueryMyCarts(accessToken: string) {
  const url = `${client.apiUrl}/${client.project_key}/me/carts`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    if (res.ok) {
      const result = data as CartPagedQueryResponse;
      return new CartPaged(result);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

export async function fetchGetMyCartsById(accessToken: string, id: string) {
  const url = `${client.apiUrl}/${client.project_key}/me/carts/${id}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const data = await res.json();

    if (res.ok) {
      const result = data as CartType;
      return new Cart(result);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

export async function fetchCreateMyCart(accessToken: string, cart: MyCartDraft) {
  const url = `${client.apiUrl}/${client.project_key}/me/carts`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    });

    const data = await res.json();

    if (res.ok) {
      const result = data as CartType;
      return new Cart(result);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

export async function fetchUpdateCart(
  accessToken: string,
  id: string,
  options: { version: number; actions: Actions[] }
) {
  const url = `${client.apiUrl}/${client.project_key}/me/carts/${id}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ version: options.version, actions: options.actions })
    });

    const data = await res.json();

    if (res.ok) {
      const result = data as CartType;
      return new Cart(result);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}
