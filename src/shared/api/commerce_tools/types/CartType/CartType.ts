import { LocalizedStringType, ProductVariantType } from '../../endpoints/common/Types';
import { DiscountCode } from '../DiscountType/DiscountType';
import { Price } from '../PriceType';
import { BaseAddressType } from '../Types';

type CurrencyCode = 'EUR' | 'USD' | 'RUB';

export interface CartResourceIdentifierType {
  id?: string;
  key?: string;
  typeId?: string; //References a Cart.
}

interface CentPrecisionMoneyType {
  centAmount: number;
  currencyCode: CurrencyCode;
  type: string;
  fractionDigits: number;
}

export type LineItem = {
  id: string;
  key?: string;
  productId: string;
  productKey?: string;
  name: LocalizedStringType;
  productSlug?: LocalizedStringType;
  // productType: ProductTypeReference;
  variant: ProductVariantType;
  price: Price;
  quantity: number;
  totalPrice: CentPrecisionMoneyType;
  // discountedPricePerQuantity: DiscountedLineItemPriceForQuantity[];
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
  addedAt?: string; //DateTime
  // custom?: CustomFields;
  lastModifiedAt?: string; //DateTime
};

type DiscountCodeReference = {
  id: string;
  typeId: string;
  obj?: DiscountCode;
};

type DiscountCodeState = string;

type DiscountCodeInfo = {
  discountCode: DiscountCodeReference;
  state: DiscountCodeState;
};

export interface CartType {
  id: string;
  version: number;
  key?: string;
  customerId?: string;
  customerEmail?: string;
  //   customerGroup?: CustomerGroupReference;
  anonymousId?: string;
  // businessUnit?: BusinessUnitKeyReference;
  // store?: StoreKeyReference;
  lineItems: LineItem[];
  // customLineItems: CustomLineItem[];
  totalLineItemQuantity?: number;
  totalPrice: CentPrecisionMoneyType;
  // taxedPrice?: TaxedPrice;
  // taxedShippingPrice?: TaxedPrice;
  // taxMode: TaxMode;
  // taxRoundingMode: RoundingMode;
  // taxCalculationMode: TaxCalculationMode;
  // inventoryMode: InventoryMode;
  // cartState: CartState;
  // billingAddress?: Address;
  // shippingAddress?: Address;
  // shippingMode: ShippingMode;
  shippingKey?: string;
  // shippingInfo?: ShippingInfo;
  // shippingRateInput?: ShippingRateInput;
  // shippingCustomFields?: CustomFields;
  // shipping?: Shipping[];
  // itemShippingAddresses?: Address[];
  discountCodes: DiscountCodeInfo[];
  // directDiscounts: DirectDiscount[];
  // refusedGifts: CartDiscountReference[];
  // paymentInfo?: PaymentInfo;
  // country?: CountryCode;
  // locale?: Locale;
  // origin: CartOrigin;
  deleteDaysAfterLastModification?: number;
  // custom?: CustomFields;
  createdAt: string; //DateTime
  // createdBy?: CreatedBy;
  lastModifiedAt: string; //DateTime
  // lastModifiedBy?: LastModifiedBy;
}

export type CartPagedQueryResponse = {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: CartType[];
};

export type CartDraftType = {
  key?: string;
  currency: CurrencyCode;
  customerId?: string;
  customerEmail?: string;
  // customerGroup?: CustomerGroupResourceIdentifier;
  anonymousId?: string;
  // businessUnit?: BusinessUnitResourceIdentifier;
  // store?: StoreResourceIdentifier;
  // lineItems?: LineItemDraft[];
  // customLineItems?: CustomLineItemDraft[];
  // taxMode?: TaxMode;
  // externalTaxRateForShippingMethod?: ExternalTaxRateDraft;
  // taxRoundingMode?: RoundingMode;
  // taxCalculationMode?: TaxCalculationMode;
  // inventoryMode?: InventoryMode;
  billingAddress?: BaseAddressType;
  shippingAddress?: BaseAddressType;
  // shippingMethod?: ShippingMethodResourceIdentifier;
  // shippingRateInput?: ShippingRateInputDraft;
  // shippingMode?: ShippingMode;
  // customShipping?: CustomShippingDraft[];
  // shipping?: ShippingDraft[];
  itemShippingAddresses?: BaseAddressType[];
  discountCodes?: string[];
  // country?: CountryCode;
  // locale?: Locale;
  // origin?: CartOrigin;
  deleteDaysAfterLastModification?: number;
  // custom?: CustomFieldsDraft;
};
