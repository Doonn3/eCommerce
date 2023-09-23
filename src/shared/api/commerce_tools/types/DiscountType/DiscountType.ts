type LocalizedString = { [key in string]: string };

type CartDiscountValue = {};

type CartDiscount = {
  id: string;
  version: number;
  key?: string;
  name: LocalizedString;
  description?: LocalizedString;
  value: CartDiscountValue;
  cartPredicate: string;
  //   target?: CartDiscountTarget;
  sortOrder: string;
  //   stores: StoreKeyReference[];
  isActive: boolean;
  validFrom?: string; // DateTime
  validUntil?: string; // DateTime
  requiresDiscountCode: boolean;
  //   references: Reference[];
  //   stackingMode: StackingMode;
  //   custom?: CustomFields;
  createdAt: string; // DateTime
  //   createdBy?: CreatedBy;
  lastModifiedAt: string; // DateTime;
  //   lastModifiedBy?: LastModifiedBy;
};

type CartDiscountReference = {
  id: string;
  typeId: string;
  obj: CartDiscount;
};

export type DiscountCode = {
  id: string;
  version: string;
  name?: LocalizedString;
  description?: LocalizedString;
  code: string;
  cartDiscounts: CartDiscountReference[];
  cartPredicate: string;
  isActive: boolean;
  //   references: Reference[];
  maxApplications?: number;
  maxApplicationsPerCustomer?: number;
  groups: string[];
  validFrom?: string; // DateTime
  validUntil?: string; // DateTime
  applicationVersion?: number;
  //   custom?: CustomFields;
  createdAt: string; // DateTime
  createdBy?: string; // DateTime;
  lastModifiedAt: string; // DateTime
  //   lastModifiedBy: LastModifiedBy;
};

export type DiscountCodePagedQueryResponse = {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: DiscountCode[];
};
