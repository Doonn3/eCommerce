import client from './common/client.config';
import Customer from './models/Customer';
import CustomerSignInResult from './models/CustomerSignInResult';
import ErrorCredentials from './models/ErrorCredentials';
import { CustomerChangePasswordType, UpdateCustomerRequest } from './types/CustomerType';
import { InvalidCredentialsType } from './types/ErrorsType';
import {
  CustomerDraft,
  CustomerSignInResultType,
  CustomerSignInType,
  CustomerType
} from './types/Types';

export async function signUpCustomer(token: string, customerDraft: CustomerDraft) {
  const url = client.apiUrl + '/' + client.project_key + '/' + 'customers';

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerDraft)
    });

    const result = await res.json();

    if (res.ok) {
      const data = result as CustomerSignInResultType;
      return new CustomerSignInResult(data);
    } else {
      const err = result as InvalidCredentialsType;
      return new ErrorCredentials(err);
    }
  } catch (error) {
    return error as Error;
  }
}

export async function signInCustomer(token: string, customer: CustomerSignInType) {
  const url = client.apiUrl + '/' + client.project_key + '/' + 'login';
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    });

    const result = await res.json();

    if (res.ok) {
      const data = result as CustomerSignInResultType;
      return new CustomerSignInResult(data);
    } else {
      const err = result as InvalidCredentialsType;
      return new ErrorCredentials(err);
    }
  } catch (error) {
    const err = error as Error;

    return err;
  }
}

export async function getCustomerByID(_accessToken: string, id: string) {
  const url = `${client.apiUrl}/${client.project_key}/customers/${id}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${_accessToken}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      const result = data as CustomerType;
      return result;
    } else {
      const err = data as InvalidCredentialsType;
      return new ErrorCredentials(err);
    }
  } catch (error) {
    return error as Error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function fetchUpdateCustomerByID(
  accessToken: string,
  id: string,
  options: { version: number; actions: UpdateCustomerRequest }
) {
  const url = `${client.apiUrl}/${client.project_key}/customers/${id}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ version: options.version, actions: options.actions.actions })
    });

    const data = await res.json();

    if (res.ok) {
      const result = data as CustomerType;
      return new Customer(result);
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

export async function fetchChangePasswordOfCustomer(
  accessToken: string,
  changePassword: CustomerChangePasswordType
) {
  const url = `${client.apiUrl}/${client.project_key}/customers/password`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(changePassword)
    });

    const data = await res.json();

    if (res.ok) {
      const result = data as CustomerType;
      return result;
    } else {
      return data.message as string;
    }
  } catch (error) {
    return error as Error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function deleteCustomer() {}
