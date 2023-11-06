<script lang="ts" setup>
import ExitDoorIcon from '@shared/ui-kit/assets/ExitDoorIcon.vue';
import { useCustomer } from '@entities/Customer';

const user = useCustomer();
</script>

<template>
  <div
    class="flex cursor-pointer p-3 text-sm capitalize"
    @click="user.SignOut"
  >
    <ExitDoorIcon />
    <span class="text-base-content">Sign Out</span>
  </div>
</template>
