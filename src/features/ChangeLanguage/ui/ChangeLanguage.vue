<script lang="ts" setup>
import { useAppState, type LangType } from '@shared/State/AppState';

const appState = useAppState();

const onChange = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) return;

  appState.changeLanguage(target.value as LangType);
};
</script>

<template>
  <select
    class="select select-md min-h-0 border-none bg-transparent p-0 text-center"
    @change="onChange"
    :value="appState.getState.language === 'ru' ? 'ru' : 'en'"
  >
    <option
      class="bg-base-300"
      value="en"
    >
      ENG
    </option>
    <option
      class="bg-base-300"
      value="ru"
    >
      RUS
    </option>
  </select>
</template>
