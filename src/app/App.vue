<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useAppState } from '../shared/State/AppState';
import { AlertMessage } from '@shared/State/AlertStateMessage';

onMounted(() => {
  useAppState();
});
</script>

<template>
  <main>
    <RouterView />
  </main>

  <AlertMessage />
</template>
