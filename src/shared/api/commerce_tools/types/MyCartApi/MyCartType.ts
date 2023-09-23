export type StoreResourceIdentifier = {
  id: string;
  key: string;
  typeId: string;
};

export type MyLinenItemDraft = {
  key: string;
  productId: string;
  variantId: number;
  sku: string;
  quantity: number;
};

export type BaseAddress = {
  id: string;
  key: string;
  externalId: string;
  country: string;
  title: string;
};

export type ShippingMethodResourceIdentifier = {
  id: string;
  key: string;
  typeId: string;
};

export type TypeResourceIdentifier = {
  id: string;
  key: string;
  typeId: string;
};

export type MyCartDraft = {
  currency: string;
  customerEmail?: string;
  store?: StoreResourceIdentifier;
  lineItems?: MyLinenItemDraft[];
  inventoryMode?: string;
  billingAddress?: BaseAddress;
  shippingAddress?: BaseAddress;
  shippingMethod?: ShippingMethodResourceIdentifier;
  discountCodes?: string[];
  country?: string;
  locale?: string;
  deleteDaysAfterLastModification?: number;
  custom?: {
    type: TypeResourceIdentifier;
    fields: string;
  };
};
