<script lang="ts" setup>
import { ref } from 'vue';
import { HamburgerButton } from '@shared/ui-kit/Buttons';
import { DrawerMenu } from '@shared/ui-kit/Layout';

const HamburgerButtonRef = ref<InstanceType<typeof HamburgerButton>>();

const isOpenNav = ref(false);

const openClose = () => {
  isOpenNav.value = !isOpenNav.value;
  HamburgerButtonRef.value?.switchIcon(isOpenNav.value);
};
</script>

<template>
  <div>
    <HamburgerButton
      ref="HamburgerButtonRef"
      @click.prevent="openClose"
    />
    <drawer-menu
      :is-open="isOpenNav"
      @click="openClose"
    >
      <li><router-link to="/catalog">Catalog</router-link></li>
      <li><router-link to="/about-us">About Us</router-link></li>
    </drawer-menu>
  </div>
</template>
