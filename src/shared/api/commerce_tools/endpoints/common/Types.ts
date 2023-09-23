import { Price } from '../../types/PriceType';

export type LocalizedStringType = { [key in string]: string };

export type CategoryReferenceType = {
  id: string;
  typeId: string;
  //   obj: Category; << Пока Нету
};

export type ImageDimensions = {
  w: number;
  h: number;
};

export type Image = {
  url: string;
  dimensions: ImageDimensions;
  label?: string;
};

export type CategoryOrderHintsType = { [key: string]: string };

export type ProductVariantType = {
  id: string;
  key?: string;
  sku?: string;
  prices?: Price[];
  // attributes?: Attribute[];
  price?: Price;
  images?: Image[];
  // assets?: Asset[];
  // availability?: ProductVariantAvailability;
  isMatchingVariant?: boolean;
  // scopedPrice?: ScopedPrice;
  scopedPriceDiscounted?: boolean;
};

type SuggestTokenizer = {
  type: string;
  inputs?: string[];
};

export type SearchKeywordType = {
  text: string;
  suggestTokenizer?: SuggestTokenizer;
};
