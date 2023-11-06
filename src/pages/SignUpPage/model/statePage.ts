import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

import { useSteps } from '@shared/lib/composables';
import { useCustomer } from '@entities/Customer';

import type { TFormFields } from '../components/MainLayer/model/MainLayerModel';
import type { AddressType } from '../ui/AddressLayer/model/AddressLayerModel';
import type { BaseAddress } from '../../../shared/api/common/CommonType';

const NAME_SPACE = 'SignupPage_State';

export const useState = defineStore(NAME_SPACE, () => {
  const router = useRouter();

  const customer = useCustomer();

  const step = useSteps();

  const currStep = step.Data;

  let mainData: TFormFields | null = null;

  let shippingAddress: AddressType | null = null;

  let billingAddress: AddressType | null = null;

  const setMainData = (_data: TFormFields) => {
    mainData = _data;
  };

  const setShippingAddress = (_address: AddressType) => {
    shippingAddress = _address;
    console.log(shippingAddress);
  };

  const setBillingAddress = (_address: AddressType) => {
    billingAddress = _address;
    console.log(billingAddress);
  };

  const next = () => {
    step.next();
  };

  const prev = () => {
    step.prev();
  };

  const unwrapAddress = (_address: AddressType) => {
    const { country, city, street } = _address;

    console.log(country, 'COUNTRY');

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

    customer.SignUp({
      firstName: name,
      lastName: surname,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      addresses,
      defaultShippingAddress: shippingAddress?.isDefault ? 0 : undefined,
      defaultBillingAddress: billingAddress?.isDefault ? 1 : undefined
    });
  };

  return {
    currStep,
    next,
    prev,
    setMainData,
    setBillingAddress,
    setShippingAddress,
    submit
  };
});
