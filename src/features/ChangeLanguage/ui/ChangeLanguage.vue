<script lang="ts" setup>
import { useAppState } from '@shared/State/AppState';

const appState = useAppState();

const onClickLangEng = () => {
  appState.changeLanguage('en');
};
const onClickLangRus = () => {
  appState.changeLanguage('ru');
};
</script>

<template>
  <div class="space-x-3">
    <input
      class="btn btn-xs"
      type="radio"
      name="language"
      aria-label="Rus"
      @click="onClickLangRus"
    />
    <input
      class="btn btn-xs"
      type="radio"
      name="language"
      aria-label="Eng"
      @click="onClickLangEng"
    />
  </div>
</template>
