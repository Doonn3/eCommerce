type DateTime = string;

type LocalizedString = { [key in string]: string };

type ProductDiscountValue = {};

type Reference = {};

type LastModifiedBy = {};

type CurrencyCode = string;

type MoneyType = {
  centPrecision: boolean;
  highPrecision: boolean;
};

type TypedMoney = {
  centAmount: number;
  currencyCode: CurrencyCode;
  type: MoneyType;
  fractionDigits: number;
};

type ProductDiscount = {
  id: string;
  version: number;
  key?: string;
  name: LocalizedString;
  description?: LocalizedString;
  value: ProductDiscountValue;
  predicate: string;
  sortOrder: string;
  isActive: boolean;
  references: Reference;
  validFrom?: DateTime;
  validUntil?: DateTime;
  createdAt: DateTime;
  createdBy?: DateTime;
  lastModifiedAt: DateTime;
  lastModifiedBy?: LastModifiedBy;
};

type ProductDiscountReference = {
  id: string;
  typeId: string;
  obj: ProductDiscount;
};

export type DiscountedPriceType = {
  value: TypedMoney;
  discount: ProductDiscountReference;
};
