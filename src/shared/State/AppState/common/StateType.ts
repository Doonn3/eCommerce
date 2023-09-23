export type LangType = 'ru' | 'en-US';

export type CurrencyCodeType = 'EUR' | 'USD' | 'RUB';

export type ThemeType = 'light' | 'dark' | 'business';

export type StateType = {
  language: LangType;
  currencyCode: CurrencyCodeType;
  theme: ThemeType;
};
