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
    const res = await http.post<ResponseMessage | CustomerSignInResultType>(url, user, {
      headers: { 'Content-Type': 'application/json' }
    });
    const resOK = res.status >= 200 && res.status < 300;
    if (resOK) {
      return res.data;
    }

    throw new Error((res.data as ResponseMessage).message);
  } catch (error) {
    return error as Error;
  }
}

export async function fetchUserSignUp(user: MyCustomerDraftType) {
  const url = `${apiUrl}/${project_key}/me/signup`;
  try {
    const res = await http.post<ResponseMessage | CustomerSignInResultType>(url, user, {
      headers: { 'Content-Type': 'application/json' }
    });

    const resOK = res.status >= 200 && res.status < 300;
    if (resOK) {
      return res.data;
    }

    throw new Error(`Что то пошло не так не получилось зарегестрироватся! >> ${(res.data as ResponseMessage).message} >> ${res.status}`);
  } catch (error) {
    return error as Error;
  }
}
