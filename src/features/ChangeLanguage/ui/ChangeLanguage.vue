<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components';
import { useAppState } from '@shared/State/AppState';
import { useSwitch } from '@shared/lib/hooks';
import { SubMenu } from '@shared/ui-kit/Navigation';

const appState = useAppState();
const toggle = useSwitch(false);

const onClickLangEng = () => {
  appState.changeLanguage('en-US');
};
const onClickLangRus = () => {
  appState.changeLanguage('ru');
};
</script>

<template>
  <on-click-outside @trigger="toggle.off">
    <sub-menu
      name="Language"
      :is-open="toggle.getState.value"
      @click="toggle.onSwitch"
    >
      <li @click="onClickLangEng"><p>ENG</p></li>
      <li @click="onClickLangRus"><p>RUS</p></li>
    </sub-menu>
  </on-click-outside>
</template>
