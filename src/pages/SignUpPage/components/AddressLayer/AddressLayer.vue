<script lang="ts" setup>
import { ref } from 'vue';

import { SimpleInput, CheckBoxToggle } from '@shared/ui-kit/DataInput';
import { InputField } from '@shared/ui-kit/DataInput';
import { SelectMenu } from '@shared/ui-kit/Navigation';
import type { VestFormType } from '@shared/lib/VestValidation';

import { ControlLayer } from '../ControlLayer';

import { type AddressType } from '../../model/AddressModel';

type PropsType = {
  form: VestFormType<AddressType>;
};

const props = defineProps<PropsType>();

const modelForm = ref(props.form.state);

const countryData = [
  {
    value: 'DE',
    text: 'Germany'
  },
  {
    value: 'RU',
    text: 'Russian'
  }
];

const emit = defineEmits<{
  (e: 'update:model', data: AddressType): void;
  (e: 'emit:form', data: AddressType): void;
  (e: 'emit:back'): void;
}>();

const message = (data: typeof props.form, val: keyof AddressType) => {
  if (data.StatusText(val) === 'success') return 'Success';
  return data.GetError(val);
};

const status = (val: keyof AddressType) => {
  return props.form.StatusText(val);
};
</script>
<template>
  <section class="sign-up-main-layer grid space-y-10">
    <div class="grid gap-5">
      <input-field
        name="Country"
        :message="message(props.form, 'country')"
        :status="status('country')"
      >
        <SelectMenu
          id="country"
          label="Option Country"
          :status="status('country')"
          :options="countryData"
          @event:select="
            (val) => {
              modelForm.country = val;
              emit('update:model', modelForm);
            }
          "
        />
      </input-field>

      <input-field
        name="City"
        :message="message(props.form, 'city')"
        :status="status('city')"
      >
        <SimpleInput
          :model-value="modelForm.city"
          @update:model-value="
            (val) => {
              modelForm.city = val;
              emit('update:model', modelForm);
            }
          "
          :condition="status('city')"
        />
      </input-field>

      <input-field
        name="Street"
        :message="message(props.form, 'street')"
        :status="status('street')"
      >
        <SimpleInput
          :model-value="modelForm.street"
          @update:model-value="
            (val) => {
              modelForm.street = val;
              emit('update:model', modelForm);
            }
          "
          :condition="status('street')"
        />
      </input-field>

      <div class="flex items-center space-x-2">
        <CheckBoxToggle
          :is-indeterminate="false"
          @change="
            () => {
              modelForm.isDefault = !modelForm.isDefault;
              emit('update:model', modelForm);
            }
          "
        />
        <p>Default shipping address</p>
      </div>

      <ControlLayer
        @back="emit('emit:back')"
        @next="
          {
            if (props.form.Valid()) {
              emit('emit:form', modelForm);
            }
          }
        "
      />
    </div>
  </section>
</template>
