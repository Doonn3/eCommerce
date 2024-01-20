import { defineStore } from 'pinia';

import type { BaseAddress } from '@shared/api/common/CommonType';

import { useCustomer } from '@entities/Customer';

import type { TFormFields } from './MainModel';
import type { AddressType } from './AddressModel';
import { useRouter } from 'vue-router';

const NAME_SPACE = 'SignupPage_State';

export const useState = defineStore(NAME_SPACE, () => {
  const router = useRouter();
  const customer = useCustomer();

  let mainData: TFormFields | null = null;

  let shippingAddress: AddressType | null = null;

  let billingAddress: AddressType | null = null;

  const testMainData: TFormFields = {
    name: 'Kolan',
    surname: 'Yak',
    email: 'pastux@pastux.com',
    password: 'FJfngjru1230FJnjvf',
    dateOfBirth: '10/12/2000'
  };

  const testShipBillAddress: AddressType = {
    country: 'Russia',
    city: 'Voronesh',
    street: 'Teplak',
    isDefault: false
  };

  const setMainData = (_data: TFormFields) => {
    mainData = _data;
  };

  const getMainData = () => {
    return mainData;
  };

  const setShippingAddress = (_address: AddressType) => {
    shippingAddress = _address;
  };

  const getShippingAddress = () => {
    return shippingAddress;
  };

  const setBillingAddress = (_address: AddressType) => {
    billingAddress = _address;
  };

  const getBillingAddress = () => {
    return billingAddress;
  };

  const unwrapAddress = (_address: AddressType) => {
    const { country, city, street } = _address;

    const address: BaseAddress = {
      country,
      city,
      streetName: street
    };

    return address;
  };

  const submit = () => {
    if (mainData === null) return;

    const { name, surname, email, password, dateOfBirth } = mainData;

    const addresses: BaseAddress[] = [];
    if (shippingAddress !== null) {
      addresses.push(unwrapAddress(shippingAddress));
    }

    if (billingAddress !== null) {
      addresses.push(unwrapAddress(billingAddress));
    }

    customer
      .SignUp({
        firstName: name,
        lastName: surname,
        email: email,
        password: password,
        dateOfBirth: dateOfBirth,
        addresses,
        defaultShippingAddress: shippingAddress?.isDefault ? 0 : undefined,
        defaultBillingAddress: billingAddress?.isDefault ? 1 : undefined
      })
      .then((result) => {
        if (!result.isError) router.push({ name: 'catalog' });
      });
  };

  return {
    setMainData,
    setBillingAddress,
    setShippingAddress,
    submit,

    getMainData,

    getShippingAddress,

    getBillingAddress,

    testMainData,
    testShipBillAddress
  };
});
