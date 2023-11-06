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

// Address
export type BaseAddress = {
  id?: string;
  key?: string;
  externalId?: string;
  country: CountryCode;
  title?: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  streetNumber?: string;
  additionalStreetInfo?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  state?: string;
  company?: string;
  department?: string;
  building?: string;
  apartment?: string;
  pOBox?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  fax?: string;
  additionalAddressInfo?: string;
  custom?: CustomFields;
};

export type Address = BaseAddress;
// << Address

// Cart

type LineItem = {
  id: string;
  key?: string;
  productId: string;
  productKey?: string;
  name: LocalizedString;
  productSlug?: LocalizedString;
  // productType: ProductTypeReference;
  // variant: ProductVariant;
  price: Price;
  quantity: number;
  // totalPrice: CentPrecisionMoney;
  // discountedPricePerQuantity: DiscountedLineItemPriceForQuantity;
  // taxedPrice?: TaxedItemPrice;
  // taxedPricePortions: MethodTaxedPrice[];
  // state: ItemState[];
  // taxRate?: TaxRate;
  // perMethodTaxRate: MethodTaxRate[];
  // supplyChannel?: ChannelReference;
  // distributionChannel?: ChannelReference;
  // priceMode: LineItemPriceMode;
  // lineItemMode: LineItemMode;
  // inventoryMode?: InventoryMode;
  // shippingDetails?: ItemShippingDetails;
  addedAt?: DateTime;
  custom?: CustomFields;
  lastModifiedAt?: DateTime;
};

export type Cart = {
  id: string;
  version: number;
  key?: string;
  customerId?: string;
  customerEmail?: string;
  // customerGroup?: CustomerGroupReference;
  anonymousId?: string;
  // businessUnit?: BusinessUnitKeyReference;
  // store?: StoreKeyReference;
  lineItems: LineItem[];
  // customLineItems?: CustomLineItem[];
  totalLineItemQuantity?: number;
  // totalPrice: CentPrecisionMoney;
  // taxedPrice?: TaxedPrice;
  // taxedShippingPrice?: TaxedPrice;
  // discountOnTotalPrice?: DiscountOnTotalPrice;
  // taxMode: TaxMode;
  // taxRoundingMode: RoundingMode;
  // taxCalculationMode: TaxCalculationMode;
  // inventoryMode: InventoryMode;
  // cartState: CartState;
  billingAddress?: Address;
  shippingAddress?: Address;
  // shippingMode: ShippingMode;
  shippingKey?: string;
  // shippingInfo?: ShippingInfo;
  // shippingRateInput?: ShippingRateInput;
  shippingCustomFields?: CustomFields;
  // shipping: Shipping[];
  itemShippingAddresses: Address[];
  // discountCodes: DiscountCodeInfo[];
  // directDiscounts: DirectDiscount[];
  // refusedGifts: CartDiscountReference[];
  // paymentInfo?: PaymentInfo;
  country?: CountryCode;
  // locale?: Locale;
  // origin: CartOrigin;
  deleteDaysAfterLastModification?: number;
  custom?: CustomFields;
  createdAt: DateTime;
  createdBy?: CreatedBy;
  lastModifiedAt: DateTime;
  lastModifiedBy?: LastModifiedBy;
};
// << Cart
