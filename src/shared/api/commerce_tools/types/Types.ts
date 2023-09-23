import { CartResourceIdentifierType, CartType } from './CartType/CartType';

export interface TokenType {
  access_token: string;
  expires_in: number;
  scope: string;
  refresh_token?: string;
  token_type: string;
}

export interface CustomerSignUpType {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface BaseAddressType {
  id?: string;
  key?: string;
  title?: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  streetNumber?: string;
  additionalStreetInfo?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  state?: string;
  country: string;
  company?: string;
  department?: string;
  building?: string;
  apartment?: string;
  pOBox?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  fax?: string;
  additionalAddressInfo?: string;
}

export interface CustomerDraft {
  key?: string;
  customerNumber?: number;
  externalId?: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  title?: string;
  // anonymousCart?: CartResourceIdentifier;
  anonymousId?: string;
  dateOfBirth?: string; // | Date
  companyName?: string;
  vatId?: string;
  addresses?: BaseAddressType[];
  defaultShippingAddress?: number;
  shippingAddressIds?: number[];
  defaultBillingAddress?: number;
  billingAddressIds?: number[];
  isEmailVerified?: boolean;
  // customerGroup?: CustomerGroupResourceIdentifier;
  locale?: string; //Locale
  salutation?: string;
  // stores?: StoreResourceIdentifier[];
  // authenticationMode?: AuthenticationMode;
  // custom?: CustomFieldsDraft;
}

// Описание Сustomer
interface CustomerGroupReference {
  typeId: 'customer-group';
  id: string;
}

interface StoreKeyReference {
  typeId: 'store';
  key: string;
}

interface CreatedBy {
  clientId: string;
  externalUserId: string;
  customer: {
    typeId: 'customer';
    id: string;
  };
  anonymousId: string;
}

interface LastModifiedBy {
  clientId: string;
  externalUserId: string;
  customer: {
    typeId: 'customer';
    id: string;
  };
  anonymousId: string;
}

type AuthenticationMode = 'Password' | 'External';

export interface CustomerType {
  id: string;
  version: number;
  key?: string;
  customerNumber?: string;
  externalId?: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  title?: string;
  dateOfBirth?: string;
  companyName?: string;
  vatId?: string;
  addresses: BaseAddressType[];
  defaultShippingAddressId?: string;
  shippingAddressIds?: string[];
  defaultBillingAddressId?: string;
  billingAddressIds?: string[];
  isEmailVerified: boolean;
  customerGroup?: CustomerGroupReference;
  locale?: string;
  salutation?: string;
  stores?: StoreKeyReference[];
  authenticationMode: AuthenticationMode;
  // custom?: CustomFields;
  createdAt: string;
  createdBy?: CreatedBy;
  lastModifiedAt: string;
  lastModifiedBy?: LastModifiedBy;
}

export interface CustomerSignInResultType {
  customer: CustomerType;
  cart: CartType;
}

export interface CustomerSignInType {
  email: string;
  password: string;
  anonymousCart?: CartResourceIdentifierType;
  // anonymousCartSignInMode?: AnonymousCartSignInMode;
  anonymousId?: string;
  updateProductData?: boolean;
}
