<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

import { useAppState } from '@shared/State/AppState';
import { AlertMessage } from '@shared/State/AlertStateMessage';

onMounted(() => {
  useAppState();
});
</script>

<template>
  <RouterView />

  <AlertMessage />
</template>
