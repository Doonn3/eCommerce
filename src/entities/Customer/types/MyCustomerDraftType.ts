import type { BaseAddress } from '../../../shared/api/common/CommonType';

export type MyCustomerDraftType = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  title?: string;
  salutation?: string;
  dateOfBirth: Date | string;
  companyName?: string;
  vatId?: string;
  addresses?: BaseAddress[];
  defaultShippingAddress?: number;
  defaultBillingAddress?: number;
  //   locale?: Locale;
  //   stores?: StoreResourceIdentifier[];
  //   custom?: CustomFieldsDraft;
};
