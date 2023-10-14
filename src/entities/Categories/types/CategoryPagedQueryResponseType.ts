import { type LocalizedString, type DateTime } from '@shared/api/common/CommonType';

type CategoryReference = {
  id: string;
  typeId: 'category';
  obj?: Category;
};

type Category = {
  id: string;
  version: number;
  key?: string;
  externalId?: string;
  name: LocalizedString;
  slug: LocalizedString;
  description?: LocalizedString;
  ancestors: CategoryReference[];
  parent?: CategoryReference;
  orderHint: string;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  //   assets?: Asset[];
  //   custom?: CustomFields;
  createdAt: DateTime;
  //   createdBy?: CreatedBy;
  lastModifiedAt: DateTime;
  //   lastModifiedBy?: LastModifiedBy;
};

export type CategoryPagedQueryResponseType = {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: Category[];
};
