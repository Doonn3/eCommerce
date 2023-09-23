import { BaseAddressType } from './Types';

type SetFirstName = {
  action: 'setFirstName';
  firstName: string;
};

type SetMiddleName = {
  action: 'setMiddleName';
  middleName: string;
};

type SetLastName = {
  action: 'setLastName';
  lastName: string;
};

type ChangeEmailType = {
  action: 'changeEmail';
  email: string;
};

type AddAddress = {
  action: 'addAddress';
  address: BaseAddressType;
};

type ChangeAddress = {
  action: 'changeAddress';
  addressId?: string;
  addressKey?: string;
  address: BaseAddressType;
};

type RemoveAddress = {
  action: 'removeAddress';
  addressId?: string;
  addressKey?: string;
};

type SetDefaultShippingAddressType = {
  action: 'setDefaultShippingAddress';
  addressId?: string;
  addressKey?: string;
};

type AddShippingAddressIDType = {
  action: 'addShippingAddressId';
  addressId?: string;
  addressKey?: string;
};

type RemoveShippingAddressID = {
  action: 'removeShippingAddressId';
  addressId?: string;
  addressKey?: string;
};

type SetDefaultBillingAddressType = {
  action: 'setDefaultBillingAddress';
  addressId?: string;
  addressKey?: string;
};

type AddBillingAddressIDType = {
  action: 'addBillingAddressId';
  addressId?: string;
  addressKey?: string;
};

type RemoveBillingAddressIDType = {
  action: 'removeBillingAddressId';
  addressId?: string;
  addressKey?: string;
};

type SetDateOfBirthType = {
  action: 'setDateOfBirth';
  dateOfBirth: string; // <<Date "2018-10-12"
};

export type UpdateCustomerAction =
  | SetFirstName
  | SetMiddleName
  | SetLastName
  | ChangeEmailType
  | AddAddress
  | ChangeAddress
  | RemoveAddress
  | SetDefaultShippingAddressType
  | AddShippingAddressIDType
  | RemoveShippingAddressID
  | SetDefaultBillingAddressType
  | AddBillingAddressIDType
  | RemoveBillingAddressIDType
  | SetDateOfBirthType;

export type UpdateCustomerRequest = {
  actions: UpdateCustomerAction[];
};

export type CustomerPasswordUpdatedType = {
  id: string;
  version: string;
  sequenceNumber: number;
  // resource: ReferenceType
  resourceVersion: number;
  type: string;
  // resourceUserProvidedIdentifiers?: UserProvidedIdentifiers;
  reset: boolean;
  createAt: string; //DateTime 2000-12-12
  // createdBy?: CreatedBy;
  lastModifiedAt: string; //DateTime 2000-12-12
  // lastModifiedBy?: LastModifiedBy;
};

export type CustomerChangePasswordType = {
  id: string;
  version: number;
  currentPassword: string;
  newPassword: string;
};
