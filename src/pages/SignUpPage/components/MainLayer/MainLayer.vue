<script lang="ts" setup>
import { PasswordInput, SimpleInput } from '@shared/ui-kit/DataInput';
import { InputField } from '@shared/ui-kit/DataInput';
import { InputDate } from '@shared/ui-kit/DataInput';

import { ControlLayer } from '../ControlLayer';

import { type TFormFields, mainForm } from '../../model/MainModel';

const emit = defineEmits<{
  (e: 'emit-form', form: TFormFields): void;
}>();

const message = (val: keyof TFormFields) => {
  if (mainForm.StatusText(val) === 'success') return 'Success';
  return mainForm.GetError(val);
};
</script>

<template>
  <section class="sign-up-main-layer grid place-items-center space-y-10">
    <div class="w-full space-y-10">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="w-full space-y-5">
          <input-field
            name="Name"
            :message="message('name')"
            :status="mainForm.StatusText('name')"
          >
            <SimpleInput
              v-model="mainForm.state.name"
              :condition="mainForm.StatusText('name')"
            />
          </input-field>

          <input-field
            name="Surname"
            :message="message('surname')"
            :status="mainForm.StatusText('surname')"
          >
            <SimpleInput
              v-model="mainForm.state.surname"
              :condition="mainForm.StatusText('surname')"
            />
          </input-field>
        </div>

        <div class="w-full space-y-5">
          <input-field
            name="Email"
            :message="message('email')"
            :status="mainForm.StatusText('email')"
          >
            <SimpleInput
              v-model="mainForm.state.email"
              :condition="mainForm.StatusText('email')"
            />
          </input-field>

          <input-field
            name="Password"
            :message="mainForm.GetError('password')"
            :status="mainForm.StatusText('password')"
          >
            <PasswordInput
              v-model="mainForm.state.password"
              :condition="mainForm.StatusText('password')"
            />
          </input-field>
        </div>
      </div>

      <input-field
        name="Date of Birth"
        :message="message('dateOfBirth')"
        :status="mainForm.StatusText('dateOfBirth')"
      >
        <InputDate
          :condition="mainForm.StatusText('dateOfBirth')"
          v-model="mainForm.state.dateOfBirth"
        />
      </input-field>
    </div>
    <ControlLayer
      :hide-control="'back'"
      @next="
        () => {
          if (mainForm.Valid()) {
            emit('emit-form', mainForm.state);
          }
        }
      "
    />
  </section>
</template>
