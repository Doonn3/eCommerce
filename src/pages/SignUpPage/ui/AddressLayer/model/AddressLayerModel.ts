import { create, enforce, only, test } from 'vest';
import { useVestForm } from '@shared/lib/VestValidation';
import { ruls } from '@shared/lib/VestValidation';

export type AddressType = {
  country: string;
  city: string;
  street: string;
  isDefault: boolean;
};

const shippingModel: AddressType = {
  country: '',
  city: '',
  street: '',
  isDefault: false
};

const billingModel: AddressType = {
  country: '',
  city: '',
  street: '',
  isDefault: false
};

const addressRuls = create('AddresLayer', (data: AddressType, _nameField?: keyof AddressType) => {
  only(_nameField);

  test((_nameField = 'country'), `Select option is required`, () => {
    enforce(data.country).isNotBlank();
  });

  ruls.textRuls(data.city, (_nameField = 'city'));
  ruls.textRuls(data.street, (_nameField = 'street'));
});

export const shippingForm = useVestForm(shippingModel, (_dataForm, _nameField) => {
  return addressRuls(_dataForm, _nameField);
});

export const billingForm = useVestForm(billingModel, (_dataForm, _nameField) => {
  return addressRuls(_dataForm, _nameField);
});
