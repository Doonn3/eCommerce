import { CustomerReferenceType } from '../../types/common/Types';
import { ProductCatalogDataType } from './ProductCatalogDataType';
import {
  // LocalizedStringType,
  CategoryReferenceType,
  ProductVariantType
} from '../common/Types';

// enum AttributeConstraintEnum {
// None = 'None',
// Unique = 'Unique',
// CombinationUnique = 'CombinationUnique',
// SameForAll = 'SameForAll'
// }

// export enum TextInputHint {
//   SingleLine = 'SingleLine',
//   MultiLine = 'MultiLine'
// }

type AttributeType = {
  name: string;
  values?: string[];
  elementType?: string;
};

type LocalizedStringType = { [key in string]: string };

type AttributeDefinitionType = {
  type: AttributeType;
  name: string;
  label: LocalizedStringType;
  isRequired: boolean;
  // attributeConstraint: AttributeConstraintEnum;
  inputTip?: LocalizedStringType;
  // inputHint: TextInputHint;
  isSearchable: boolean;
};

type CreatedByType = {
  clientId?: string;
  externalUserId?: string;
  customer?: CustomerReferenceType;
  anonymousId?: string;
  associate?: CustomerReferenceType;
};

type LastModifiedByType = {
  clientId?: string;
  externalUserId?: string;
  customer?: CustomerReferenceType;
  anonymousId?: string;
  associate?: CustomerReferenceType;
};

type ProductType = {
  // id: string;
  version: number;
  key?: string;
  name: string;
  description: string;
  attributes?: AttributeDefinitionType;
  // eslint-disable-next-line no-irregular-whitespace
  createdAt: string; //<< DateTime​ ormat (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
  createdBy?: CreatedByType;
  // eslint-disable-next-line no-irregular-whitespace
  lastModifiedAt: string; //<< DateTime​ ormat (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
  lastModifiedBy?: LastModifiedByType;
};

type ProductTypeReferenceType = {
  id: string;
  typeId: string;
  obj: ProductType;
};

// Все что выше общие типы для Products
export interface Product {
  id: string;
  version: number;
  key?: string;
  productType: ProductTypeReferenceType;
  masterData: ProductCatalogDataType;
  //   taxCategory?: TaxCategoryReference;
  //   state?: StateReference;
  //   reviewRatingStatistics: ?ReviewRatingStatistics;
  //   priceMode?: ProductPriceModeEnum;
  // eslint-disable-next-line no-irregular-whitespace
  createdAt: string; //<< DateTime​ ormat (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
  //   createdBy?: CreatedBy;
  // eslint-disable-next-line no-irregular-whitespace
  lastModifiedAt: string; //<< DateTime​ ormat (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
  //   lastModifiedBy?: LastModifiedBy;
}

export default Product;

export interface ProductProjection {
  id: string;
  version: number;
  key?: string;
  productType: ProductTypeReferenceType;
  name: LocalizedStringType;
  description?: LocalizedStringType;
  slug: LocalizedStringType;
  categories: CategoryReferenceType[];
  // categoryOrderHints?: CategoryOrderHintsType;
  metaTitle?: LocalizedStringType;
  metaDescription?: LocalizedStringType;
  metaKeywords?: LocalizedStringType;
  // searchKeywords?: SearchKeywordType;
  hasStagedChanges?: boolean;
  published?: boolean;
  masterVariant: ProductVariantType;
  variants: ProductVariantType[];
  // taxCategory?: TaxCategoryReference;
  // state?: StateReference;
  // reviewRatingStatistics?: ReviewRatingStatistics;
  // priceMode?: ProductPriceModeEnum;
  createdAt: string; //<< (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
  lastModifiedAt: string; //<< (YYYY-MM-DDThh:mm:ss.sssZ) "2018-10-12T14:00:00.000Z"
}

export interface ProductPagedQueryResponseType<T> {
  limit: number;
  offset: number;
  count: number;
  total?: number;
  results: T[];
}
