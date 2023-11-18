<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { auth } from '@/auth/model/AuthMonitor';
</script>

<template>
  <router-link to="/login">
    <SimpleButton
      v-if="auth.IsAuthorized.value === false"
      name="Login"
      :options="{ colorStyle: 'btn-link' }"
      class="w-[80px] md:w-[100px]"
    />
  </router-link>
</template>
