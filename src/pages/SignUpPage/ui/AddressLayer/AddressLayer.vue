<script lang="ts" setup>
import { SimpleInput, CheckBoxToggle } from '@shared/ui-kit/DataInput';
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { InputField } from '@shared/ui-kit/DataInput';
import { SelectMenu, LinkText } from '@shared/ui-kit/Navigation';

import { useState } from '../../model/statePage';
import { type AddressType } from './model/AddressLayerModel';
import type { VestFormType } from '@shared/lib/VestValidation';
import { ref } from 'vue';
type PropsType = {
  form: VestFormType<AddressType>;
};

const props = defineProps<PropsType>();

const modelForm = ref(props.form.state);

const state = useState();

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
  (e: 'submit:model'): void;
}>();

const onSubmit = () => {
  if (props.form.Valid()) {
    emit('submit:model');

    state.next();
  }
};

const message = (data: typeof props.form, val: keyof AddressType) => {
  if (data.Result.value?.isValid(val)) return 'Success';
  return data.GetError(val);
};
</script>
<template>
  <section class="sign-up-main-layer flex h-full flex-col space-y-10">
    <div class="mt-5 w-full">
      <input-field
        name="Country"
        :message="message(props.form, 'country')"
        :status="props.form.StatusText('country')"
      >
        <SelectMenu
          id="country"
          label="Option Country"
          :status="props.form.StatusText('country')"
          :options="countryData"
          @event:select="
            (val) => {
              console.log(val);
              modelForm.country = val;
              emit('update:model', modelForm);
            }
          "
        />
      </input-field>

      <input-field
        name="City"
        :message="message(props.form, 'city')"
        :status="props.form.StatusText('city')"
      >
        <SimpleInput
          :model-value="modelForm.city"
          @update:model-value="
            (val) => {
              modelForm.city = val;
              emit('update:model', modelForm);
            }
          "
          :condition="props.form.StatusText('city')"
        />
      </input-field>

      <input-field
        name="Street"
        :message="message(props.form, 'street')"
        :status="props.form.StatusText('street')"
      >
        <SimpleInput
          :model-value="modelForm.street"
          @update:model-value="
            (val) => {
              modelForm.street = val;
              emit('update:model', modelForm);
            }
          "
          :condition="props.form.StatusText('street')"
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
    </div>

    <div class="mx-auto mt-5 space-x-10">
      <SimpleButton
        name="Back"
        @click.prevent="() => state.prev()"
      />
      <SimpleButton
        name="Next"
        @click.prevent="onSubmit"
      />
    </div>

    <div class="flex w-full justify-around">
      <LinkText
        link-to="/home"
        name="Back to home"
      />
      <LinkText
        link-to="/login"
        name="login"
      />
    </div>
  </section>
</template>
