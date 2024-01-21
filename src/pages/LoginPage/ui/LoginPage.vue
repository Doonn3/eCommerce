<script lang="ts" setup>
import { InputField, SimpleInput, PasswordInput } from '@shared/ui-kit/DataInput';
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { ref } from 'vue';
import { create, only } from 'vest';

import { LinkText } from '@shared/ui-kit/Navigation';
import { useVestForm, ruls } from '@shared/lib/VestValidation';
import { useCustomer } from '@entities/Customer';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useCustomer();

type FormType = {
  email: string;
  password: string;
};

const form = useVestForm<FormType>({ email: '', password: '' }, (_model, _nameField) => {
  const suite = create('Login Form', (model: typeof _model, nameField?: string) => {
    only(nameField);
    ruls.emailRuls({ email: model.email }, 'email');
    ruls.passwordRuls({ password: model.password }, 'password');
  });

  return suite(_model, _nameField);
});

const isSubmit = ref(false);

const onSubmitForm = async () => {
  if (form.Valid()) {
    isSubmit.value = true;
    const { email, password } = form.state;
    userStore
      .SignIn(email, password)
      .then((data) => {
        if (data.isLogin) {
          router.push({ name: 'catalog' });
        }
      })
      .finally(() => (isSubmit.value = false));
  }
};

const message = (val: keyof FormType) => {
  if (form.Result.value?.isValid(val)) return 'Success';
  return form.GetError(val);
};
</script>

<template>
  <form
    :submit="onSubmitForm"
    class="m-auto flex h-[100vh] w-11/12 flex-col justify-center space-y-5 overflow-hidden md:w-2/4"
  >
    <input-field
      name="Email"
      :status="form.StatusText('email')"
      :message="message('email')"
    >
      <SimpleInput
        placeholder="Email"
        v-model="form.state.email"
        :condition="form.StatusText('email')"
      />
    </input-field>

    <input-field
      name="Password"
      :status="form.StatusText('password')"
      :message="message('password')"
    >
      <PasswordInput
        v-model="form.state.password"
        :condition="form.StatusText('password')"
      />
    </input-field>

    <div class="flex flex-col items-center space-y-5">
      <SimpleButton
        name="Login"
        type="submit"
        :options="{ colorStyle: 'btn-primary' }"
        :is-loading="isSubmit"
        @click.prevent="onSubmitForm"
      />
      <div class="flex w-full justify-evenly">
        <LinkText
          link-to="/catalog"
          name="Back to catalog"
        />
        <LinkText
          link-to="/sign-up"
          name="Registration"
        />
      </div>
    </div>
  </form>
</template>
