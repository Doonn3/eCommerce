import { clientFlowToken, passwordFlowToken, revokingToken } from '../tokenApi';
import { signUpCustomer } from '../customersApi';
import ErrorToken from '../models/ErrorToken';

import { CustomerDraft, CustomerSignInType, TokenType } from '../types/Types';
import localStorageService from '../../../libs/services/LocalStorageService';
import ErrorCredentials from '../models/ErrorCredentials';
import Token from '../models/Token';

type TypeMessage = 'success' | 'error';

export type MessageType = {
  type: TypeMessage;
  value: string;
};

interface SignInType {
  token: Token | null;
  message: MessageType;
}

class AuthFlowService {
  public async registrationClient(customerDraft: CustomerDraft) {
    const res = await clientFlowToken();

    if (res instanceof Error) {
      const result: SignInType = { token: null, message: { type: 'error', value: res.message } };
      return result;
    }

    if (res instanceof ErrorToken) {
      const result: SignInType = { token: null, message: { type: 'error', value: res.message } };
      return result;
    }

    const customer = await signUpCustomer(res.access_token, customerDraft);

    if (customer instanceof Error) {
      const result: SignInType = {
        token: null,
        message: { type: 'error', value: customer.message }
      };
      return result;
    }

    if (customer instanceof ErrorCredentials) {
      const result: SignInType = {
        token: null,
        message: { type: 'error', value: customer.message }
      };
      return result;
    }

    const result: SignInType = {
      token: res,
      message: { type: 'success', value: 'Регистрация прошла Успешно' }
    };
    localStorageService.save(res, 'token');

    return result;
  }

  public async signIn(customer: CustomerSignInType): Promise<SignInType> {
    const { email, password } = customer;
    const token = await passwordFlowToken(email, password);
    if (token === null) {
      return {
        token: null,
        message: { type: 'error', value: 'Неизвестная ошибка попробуйте снова' }
      };
    }

    if (token instanceof ErrorToken) {
      return { token: null, message: { type: 'error', value: token.message } };
    } else {
      localStorageService.save(token, 'token');
      return { token, message: { type: 'success', value: 'Авторизация прошла успешно' } };
    }
  }

  public async logout(token: TokenType) {
    const result = await revokingToken(token);
    localStorageService.remove('token');
    return result;
  }
}

export const authFlowService = new AuthFlowService();
