<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useAuthState } from '@shared/State/ClientState';
import { onMounted } from 'vue';

onMounted(() => {
  useAuthState().auth();
});
</script>

<template>
  <RouterView />
</template>
