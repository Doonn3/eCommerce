import { DiscountedPriceType } from './DiscountedTypes';

type CountryCode = string;

type CurrencyCode = string;

type DateTime = string;

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
