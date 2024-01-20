<script lang="ts" setup>
import { LogoButton, SimpleButton } from '@shared/ui-kit/Buttons';
import { authController } from '@/auth';
import { SearchProduct } from '@features/Product/SearchProduct';

import { UserWidget } from '@widgets/UserWidget';

import DesktopNav from '../components/DesktopNav.vue';
import MobileNav from '../components/MobileNav.vue';
</script>

<template>
  <header class="flex items-center justify-between bg-base-300 px-0 md:px-2">
    <div class="hidden items-center md:flex">
      <router-link to="/catalog">
        <LogoButton />
      </router-link>
    </div>

    <nav class="navbar">
      <div class="navbar-start">
        <DesktopNav class="hidden md:flex" />
        <MobileNav class="md:hidden" />
      </div>

      <div class="navbar-center md:hidden">
        <router-link to="/catalog">
          <LogoButton />
        </router-link>
      </div>

      <div class="navbar-center hidden w-2/4 md:flex">
        <SearchProduct class="w-full" />
      </div>

      <div class="navbar-end">
        <UserWidget v-if="authController.AuthMonitor.IsAuthorized.value" />

        <div v-if="!authController.AuthMonitor.IsAuthorized.value">
          <router-link to="/login">
            <SimpleButton
              name="Login"
              :options="{ colorStyle: 'btn-link' }"
              class="m-0 w-[100px] p-0"
            />
          </router-link>

          <router-link to="/sign-up">
            <SimpleButton
              name="Sign Up"
              :options="{ colorStyle: 'btn-link' }"
              class="m-0 w-[100px] p-0"
            />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
