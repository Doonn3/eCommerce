<script lang="ts" setup>
import { LogoButton } from '@shared/ui-kit/Buttons';
import { auth } from '@/auth/model/AuthMonitor';
import { ChangeTheme } from '@features/ChangeTheme';
import { UserLogin } from '@features/User/Login';
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

      <div class="navbar-center hidden md:flex">
        <SearchProduct class="w-full" />
      </div>

      <div class="navbar-end">
        <ChangeTheme class="mr-1 w-5" />
        <UserWidget v-if="auth.IsAuthorized.value" />
        <UserLogin />
      </div>
    </nav>
  </header>
</template>

<!-- !OLD VERSION DEPRECATED! -->
<!-- <template>
  <div class="navbar bg-base-300">
    <div class="md:navbar-start">
      <div class="hidden md:flex">
        <router-link
          to="/catalog"
          class="text-base"
          >Catalog</router-link
        >
      </div>
      <MobileNav class="md:hidden" />
    </div>

    <div class="navbar-center">
      <router-link
        to="/catalog"
        class="btn btn-ghost text-xl normal-case"
        >Shoperz</router-link
      >
    </div>

    <div class="w-full place-content-end md:navbar-end">
      <SearchProduct class="mr-2" />
      <UserWidget v-if="auth.IsAuthorized.value" />
      <UserLogin />
    </div>
  </div>
</template> -->
