<script lang="ts" setup>
import { PasswordInput, SimpleInput } from '@shared/ui-kit/DataInput';
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { LinkText } from '@shared/ui-kit/Navigation';
import { InputField } from '@shared/ui-kit/DataInput';
import { InputDate } from '@shared/ui-kit/DataInput';

import { useState } from '../../model/statePage';
import { type TFormFields, mainForm } from './model/MainLayerModel';

const state = useState();

const onSubmit = () => {
  if (mainForm.Valid()) {
    state.setMainData(mainForm.state);
    state.next();
  }
};

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

    <SimpleButton
      name="Next"
      :options="{ colorStyle: 'btn-primary' }"
      @click.prevent="onSubmit"
    />

    <div class="flex w-full justify-around">
      <LinkText
        link-to="/catalog"
        name="Back to catalog"
      />
      <LinkText
        link-to="/login"
        name="login"
      />
    </div>
  </section>
</template>
