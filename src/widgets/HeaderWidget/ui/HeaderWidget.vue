<script lang="ts" setup>
import { UserWidget } from '@widgets/UserWidget';

import { UserLogin } from '@features/User/Login';
import MobileNav from '../components/MobileNav.vue';
import { auth } from '../../../auth/model/AuthMonitor';
</script>

<template>
  <div class="navbar bg-base-300">
    <div class="navbar-start">
      <MobileNav class="md:hidden" />
    </div>

    <div class="navbar-center">
      <router-link
        to="/home"
        class="btn btn-ghost text-xl normal-case"
        >Shoperz</router-link
      >
    </div>

    <div class="navbar-end">
      <UserWidget v-if="auth.IsAuthorized.value" />
      <UserLogin />
    </div>
  </div>
</template>
