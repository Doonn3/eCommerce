import { type LocalizedString, type DateTime, type Price, type Image } from '@shared/api/common/CommonType';

type ProductVariantType = {
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

export type ProductProjectionType = {
  id: string;
  version: number;
  key?: string;
  //   productType: ProductTypeReferenceType;
  name: LocalizedString;
  description?: LocalizedString;
  slug: LocalizedString;
  //   categories: CategoryReferenceType[];
  // categoryOrderHints?: CategoryOrderHintsType;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  // searchKeywords?: SearchKeywordType;
  hasStagedChanges?: boolean;
  published?: boolean;
  masterVariant: ProductVariantType;
  //   variants: ProductVariantType[];
  // taxCategory?: TaxCategoryReference;
  // state?: StateReference;
  // reviewRatingStatistics?: ReviewRatingStatistics;
  // priceMode?: ProductPriceModeEnum;
  createdAt: DateTime; //<< (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
  lastModifiedAt: DateTime; //<< (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
};

export type ProductProjectionPagedQueryResponseType = {
  limit: number;
  count: number;
  total: number;
  offset: number;
  results: ProductProjectionType[];
};
