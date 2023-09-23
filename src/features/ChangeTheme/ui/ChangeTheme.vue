<script lang="ts" setup>
import { ref } from 'vue';

import { SwapIcon } from '@shared/ui-kit/Buttons';
import { useAppState } from '@shared/State/AppState';

const appState = useAppState();

const switchIcon = ref(appState.getState.theme === 'light' ? true : false);

const onChangeTheme = () => {
  switchIcon.value = !switchIcon.value;
  appState.switchTheme();
};
</script>

<template>
  <SwapIcon
    @change="onChangeTheme"
    :is-switch-icon="switchIcon"
  />
</template>
