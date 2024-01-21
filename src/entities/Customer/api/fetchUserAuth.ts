import { http } from '@/auth';
import { config } from '@shared/api/config/cmConfig';

import type { MyCustomerSigninType } from '../types/MyCustomerSigninType';
import type { CustomerSignInResultType } from '../types/CustomerSignInResultType';
import type { MyCustomerDraftType } from '../types/MyCustomerDraftType';

const { apiUrl, project_key } = config;

type ResponseMessage = {
  message: string;
};

export async function fetchUserSignin(user: MyCustomerSigninType) {
  const url = `${apiUrl}/${project_key}/me/login`;

  try {
    const res = await http.post<CustomerSignInResultType>(url, user, {
      headers: { 'Content-Type': 'application/json' },
      metadata: { userLogn: true }
    });
    const resOK = res.status >= 200 && res.status < 300;
    if (resOK) {
      return res.data;
    }

    const msg = (res.data as unknown as ResponseMessage).message;
    throw new Error(msg);
  } catch (error) {
    return error as Error;
  }
}

export async function fetchUserSignUp(user: MyCustomerDraftType) {
  const url = `${apiUrl}/${project_key}/me/signup`;
  try {
    const res = await http.post<CustomerSignInResultType>(url, user, {
      headers: { 'Content-Type': 'application/json' },
      metadata: { userLogn: true }
    });

    const resOK = res.status >= 200 && res.status < 300;
    if (resOK) {
      return res.data;
    }

    const msg = (res.data as unknown as ResponseMessage).message;

    throw new Error(`Что то пошло не так не получилось зарегестрироватся! >> ${msg} >> ${res.status}`);
  } catch (error) {
    return error as Error;
  }
}
