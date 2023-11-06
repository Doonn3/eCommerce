<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components';
import { SubMenu } from '@shared/ui-kit/Navigation';
import { useAppState } from '@shared/State/AppState';
import { useSwitch } from '@shared/lib/composables';
import { onMounted } from 'vue';

const appState = useAppState();

const toggle = useSwitch(false);

const onClickCurrencyEur = () => {
  appState.changeCurrencyCode('EUR');
};

const onClickCurrencyUsd = () => {
  appState.changeCurrencyCode('USD');
};

const onClickCurrencyRub = () => {
  appState.changeCurrencyCode('RUB');
};

onMounted(() => {
  console.log('asdasdasd');
});
</script>

<template>
  <on-click-outside @trigger="toggle.off">
    <sub-menu
      name="Currency"
      :is-open="toggle.getState.value"
      @click="toggle.onSwitch"
    >
      <li @click="onClickCurrencyEur"><span>EUR</span></li>
      <li @click="onClickCurrencyUsd"><span>USD</span></li>
      <li @click="onClickCurrencyRub"><span>RUB</span></li>
    </sub-menu>
  </on-click-outside>
</template>
