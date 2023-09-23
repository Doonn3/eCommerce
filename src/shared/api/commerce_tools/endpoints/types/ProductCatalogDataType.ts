import {
  LocalizedStringType,
  CategoryReferenceType,
  CategoryOrderHintsType,
  ProductVariantType,
  SearchKeywordType
} from '../common/Types';

export type ProductDataType = {
  name: LocalizedStringType;
  categories: CategoryReferenceType[];
  categoryOrderHints?: CategoryOrderHintsType;
  description?: LocalizedStringType;
  slug: LocalizedStringType;
  metaTitle?: LocalizedStringType;
  metaDescription?: LocalizedStringType;
  metaKeywords?: LocalizedStringType;
  masterVariant?: ProductVariantType;
  variants?: ProductVariantType[];
  searchKeywords?: SearchKeywordType;
};

export type SearchProductType = {
  id: string;
  key: string;
  lastModifiedAt: string;
  name: LocalizedStringType;
  categories: CategoryReferenceType[];
  categoryOrderHints?: CategoryOrderHintsType;
  description?: LocalizedStringType;
  slug: LocalizedStringType;
  metaTitle?: LocalizedStringType;
  metaDescription?: LocalizedStringType;
  metaKeywords?: LocalizedStringType;
  masterVariant?: ProductVariantType;
  variants?: ProductVariantType[];
  searchKeywords?: SearchKeywordType;
};

export interface ProductCatalogDataType {
  published: boolean;
  current: ProductDataType;
  staged: ProductDataType;
  hasStagedChanges: boolean;
}
