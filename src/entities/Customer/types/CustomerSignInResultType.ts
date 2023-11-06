import type { DateTime, Address, Cart } from '@shared/api/common/CommonType';

type AuthenticationMode = 'Password' | 'ExternalAuth';

type Customer = {
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
  dateOfBirth?: Date;
  companyName?: string;
  vatId?: string;
  addresses: Address[];
  defaultShippingAddressId?: string;
  shippingAddressIds?: string[];
  defaultBillingAddressId?: string;
  billingAddressIds?: string[];
  isEmailVerified: boolean;
  //   customerGroup?: CustomerGroupReference;
  //   locale?: Locale;
  salutation?: string;
  //   stores?: StoreKeyReference[];
  authenticationMode: AuthenticationMode;
  //   custom?: CustomFields;
  createdAt: DateTime;
  //   createdBy?: CreatedBy;
  lastModifiedAt: DateTime;
  //   lastModifiedBy?: LastModifiedBy;
};

export type CustomerSignInResultType = {
  customer: Customer;
  cart?: Cart;
};
