type SetKeyAction = {
  action: 'setKey'; // Обязательное поле.
  key?: string; // Значение, которое нужно установить. Если пусто, то существующий ключ будет удален.
};

type SetCustomerIdAction = {
  action: 'setCustomerId'; // Обязательное поле.
  customerId?: string; // ID существующего клиента. Если пусто, то любое существующее значение будет удалено.
};

type SetCustomerEmailAction = {
  action: 'setCustomerEmail'; // Обязательное поле.
  email?: string; // Значение, которое нужно установить. Если пусто, то любое существующее значение будет удалено.
};

type SetCustomerGroupAction = {
  action: 'setCustomerGroup'; // Обязательное поле.
  customerGroup?: payment;
};

type SetAnonymousIdAction = {
  action: 'setAnonymousId'; // Обязательное поле.
  anonymousId?: string; // Значение, которое нужно установить. Если пусто, то любое существующее значение будет удалено.
};

type SetBusinessUnitAction = {
  action: 'setBusinessUnit'; // Обязательное поле.
  businessUnit: payment;
};

type AddLineItem = {
  action: 'addLineItem';
  key?: string;
  productId?: string;
  variantId?: number;
  sku?: string;
  quantity?: number;
  addedAt?: string; //DateTime
  // distributionChannel?: ChannelResourceIdentifier;
  // shippingDetails?: ItemShippingDetailsDraft;
  // custom?: CustomFieldsDraft;
};

type RemoveLineItemCart = {
  action: 'removeLineItem';
  lineItemId?: string;
  lineItemKey?: string;
  quantity?: number;
  externalPrice?: Money;
  // externalTotalPrice?: ExternalLineItemTotalPrice;
  // shippingDetailsToRemove?: ItemShippingDetailsDraft;
};

type Money = {
  currencyCode: 'EUR' | 'RUB' | 'USD';
  centAmount: number;
};

type LocalizedString = {
  [locale: string]: string;
};

type AddCustomLineItemAction = {
  action: string;
  key?: string;
  money: Money;
  name: LocalizedString;
  quantity?: number;
  slug: string;
  taxCategory?: payment;
  externalTaxRate?: {
    name: string;
    amount?: number extends 0 | 1 ? number : never;
    includedInPrice: boolean;
    country: string;
    state?: string;
    subRates?: {
      name: string;
      amount: number extends 0 | 1 ? number : never;
    };
    priceMode?: 'Standard' | 'External';
  };
};

type RemoveCustomLineItemAction = {
  action: string;
  customLineItemId?: string;
  customLineItemKey?: string;
};

type AddShoppingListAction = {
  action: 'addShoppingList';
  shoppingList: {
    id: string;
    typeId: string;
  };
  supplyChannel?: {
    typeId: string;
    id: string;
  };
  distributionChannel?: {
    typeId: string;
    id: string;
  };
};

type SetCartTotalTaxAction = {
  action: 'setCartTotalTax';
  externalTotalGross: Money;
  externalTaxPortions?: {
    name?: string;
    rate: number extends 0 | 1 ? number : never;
    amount: Money;
  };
};

type ChangeTaxModeAction = {
  action: 'changeTaxMode';
  taxMode: string;
};

type ChangeTaxRoundingModeAction = {
  action: 'changeTaxRoundingMode';
  taxRoundingMode: string;
};

type ChangeTaxCalculationModeAction = {
  action: 'changeTaxCalculationMode';
  taxCalculationMode: string;
};

type AddDiscountCodeAction = {
  action: 'addDiscountCode';
  code: string;
};

type DiscountCodeReference = {
  typeId: string;
  id: string;
};

type RemoveDiscountCodeAction = {
  action: 'removeDiscountCode';
  discountCode: DiscountCodeReference;
};

type SetDirectDiscountsAction = {
  action: 'setDirectDiscounts';
  discounts: {
    value: {
      type: 'relative';
      permyriad: number;
    };
    target: {
      type: string;
      predicate: string;
    };
  };
};

type payment = {
  id: string;
  key: string;
  typeId: string;
};

type AddPaymentAction = {
  action: 'addPayment';
  payment: payment;
};

type RemovePaymentAction = {
  action: 'removePayment';
  payment: payment;
};

type SetLineItemPriceAction = {
  action: 'setLineItemPrice';
  lineItemId?: string;
  lineItemKey?: string;
  externalPrice?: Money;
};

type SetLineItemTotalPriceAction = {
  action: 'setLineItemTotalPrice';
  lineItemId?: string;
  lineItemKey?: string;
  externalTotalPrice?: {
    price: Money;
    totalPrice: Money;
  };
};

export type Actions =
  | SetKeyAction
  | SetCustomerIdAction
  | SetCustomerEmailAction
  | SetCustomerGroupAction
  | SetAnonymousIdAction
  | SetBusinessUnitAction
  | AddLineItem
  | RemoveLineItemCart
  | AddCustomLineItemAction
  | RemoveCustomLineItemAction
  | AddShoppingListAction
  | SetCartTotalTaxAction
  | ChangeTaxModeAction
  | ChangeTaxRoundingModeAction
  | ChangeTaxCalculationModeAction
  | AddDiscountCodeAction
  | RemoveDiscountCodeAction
  | SetDirectDiscountsAction
  | AddPaymentAction
  | RemovePaymentAction
  | SetLineItemPriceAction
  | SetLineItemTotalPriceAction;
