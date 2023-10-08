<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useAuthState } from '@shared/State/ClientState';
import { onMounted } from 'vue';
import { HeaderWidget } from '@widgets/HeaderWidget';
import { SettingsMenuWidget } from '@widgets/SettingsMenuWidget';

onMounted(() => {
  useAuthState().auth();
});
</script>

<template>
  <HeaderWidget />
  <main>
    <RouterView />
  </main>
  <SettingsMenuWidget class="fixed bottom-0 left-1/2 z-50 translate-x-[-50%]" />
</template>
