import { http } from '@/auth/model/interceptors';
import { config } from '@shared/api/config/cmConfig';

import type { MyCustomerSigninType } from '../types/MyCustomerSigninType';
import type { CustomerSignInResultType } from '../types/CustomerSignInResultType';
import type { MyCustomerDraftType } from '../types/MyCustomerDraftType';

const { apiUrl, project_key } = config;

// const SCOPE = scope.manage_my_profile;

export async function fetchUserSignin(user: MyCustomerSigninType) {
  const url = `${apiUrl}/${project_key}/me/login`;

  try {
    const res = await http.post<CustomerSignInResultType>(url, user, {
      headers: { 'Content-Type': 'application/json' },
      metadata: {
        type: 'login',
        data: { email: user.email, password: user.password }
      }
    });
    const resOK = res.status === 200;
    if (resOK) {
      return res.data;
    }
    throw new Error(res.data.message);
  } catch (error) {
    return error as Error;
  }
}

export async function fetchUserSignUp(user: MyCustomerDraftType) {
  const url = `${apiUrl}/${project_key}/me/signup`;
  try {
    const res = await http.post<CustomerSignInResultType>(url, user, {
      headers: { 'Content-Type': 'application/json' },
      metadata: { type: 'signup', data: { email: user.email, password: user.password } }
    });
    console.log('fetchUserSignUp', res);
    console.log('fetchUserSignUp', res.data);
    const resOK = res.status === 200;
    if (resOK) {
      return res.data;
    }
    // throw new Error('fetchUserSignUp NOT OK');
    throw new Error(res.data.message);
  } catch (error) {
    return error as Error;
  }
}
