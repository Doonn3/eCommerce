<script lang="ts" setup>
import { CategoryListWidget } from '../../Category';
import { ChangeTheme } from '@features/ChangeTheme';
import { ChangeLanguage } from '@features/ChangeLanguage';
import { ChangeCurrency } from '@features/ChangeCurrency';
</script>

<template>
  <div class="group z-[2000] flex space-x-2 rounded-box bg-base-300 p-2">
    <CategoryListWidget />
    <ChangeTheme />
    <ChangeLanguage />
    <ChangeCurrency />
  </div>
</template>

<style lang="scss" scoped>
.group {
  pointer-events: none;

  & > * {
    display: grid;
    place-content: center;

    max-height: 40px;
    max-width: 40px;
    height: 40px;
    width: 40px;

    padding: 0 5px;

    transition: 0.4s;
    pointer-events: auto;
    user-select: none;
    cursor: pointer;
  }

  *:hover {
    @apply bg-accent-content/40;
  }
}
</style>
