<script lang="ts" setup>
import { useAppState } from '@shared/State/AppState';

const appState = useAppState();

const onClickCurrencyEur = () => {
  appState.changeCurrencyCode('EUR');
};

const onClickCurrencyUsd = () => {
  appState.changeCurrencyCode('USD');
};

const onClickCurrencyRub = () => {
  appState.changeCurrencyCode('RUB');
};
</script>

<template>
  <div class="space-x-3">
    <input
      class="btn btn-xs"
      type="radio"
      name="currency"
      aria-label="Eur"
      @click="onClickCurrencyEur"
    />

    <input
      class="btn btn-xs"
      type="radio"
      name="currency"
      aria-label="Usd"
      @click="onClickCurrencyUsd"
    />

    <input
      class="btn btn-xs"
      type="radio"
      name="currency"
      aria-label="Rub"
      @click="onClickCurrencyRub"
    />
  </div>
</template>
