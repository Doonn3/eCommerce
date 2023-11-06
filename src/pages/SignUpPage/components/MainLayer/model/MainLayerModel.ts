import { create, only } from 'vest';
import { ruls, useVestForm } from '@shared/lib/VestValidation';

export type TFormFields = {
  name: string;
  surname: string;
  email: string;
  password: string;
  dateOfBirth: string;
};

const mainFormData: TFormFields = {
  name: '',
  surname: '',
  email: '',
  password: '',
  dateOfBirth: ''
};

const formMainRules = create('MainLayerForm', (data: TFormFields, _nameField?: keyof TFormFields) => {
  only(_nameField);

  ruls.textRuls(data.name, (_nameField = 'name'));
  ruls.textRuls(data.surname, (_nameField = 'surname'));
  ruls.passwordRuls({ password: data.password }, (_nameField = 'password'));
  ruls.emailRuls({ email: data.email }, (_nameField = 'email'));
  ruls.dateRuls({ date: data.dateOfBirth }, (_nameField = 'dateOfBirth'));
});

export const mainForm = useVestForm<TFormFields>(mainFormData, (_formdata, _nameField) => {
  return formMainRules(_formdata, _nameField);
});

export const getDataForm = () => {
  return mainForm.state;
};
