export type LocalizedString = { [key in string]: string };

export type DateTime = string;

type ProductDiscountValue = {};

type Reference = {};

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

type DiscountedPriceType = {
  value: TypedMoney;
  discount: ProductDiscountReference;
};

type CurrencyCode = string;

type CountryCode = string;

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

type ImageDimensions = {
  w: number;
  h: number;
};

export type Image = {
  url: string;
  dimensions: ImageDimensions;
  label?: string;
};

export type Price = {
  id: string;
  key?: string;
  value: TypedMoney;
  country?: CountryCode;
  //   customerGroup?: CustomerGroupReference;
  //   channel?: ChannelReference;
  validFrom?: DateTime;
  //   validUntil?: DateTime;
  discounted?: DiscountedPriceType;
  //   tiers?: PriceTier[];
};

type CategoryReference = {};

type Asset = {};

type CustomFields = {};

type CreatedBy = {};

type LastModifiedBy = {};
