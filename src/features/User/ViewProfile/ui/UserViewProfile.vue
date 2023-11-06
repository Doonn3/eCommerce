<script lang="ts" setup>
import UserIcon from '@shared/ui-kit/assets/UserIcon.vue';
</script>

<template>
  <router-link
    to="/profile"
    class="flex p-3 text-sm capitalize"
  >
    <UserIcon />
    <span class="mx-1 text-base-content">View profile</span>
  </router-link>
</template>
