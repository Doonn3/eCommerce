<script lang="ts" setup>
import { DropDownMenu } from '@shared/ui-kit/Layout';
import { ChangeTheme } from '@features/ChangeTheme';
import { ChangeLanguage } from '@features/ChangeLanguage';
import { ChangeCurrency } from '@features/ChangeCurrency';
</script>

<template>
  <drop-down-menu class="settings">
    <div class="flex w-full flex-col justify-between">
      <div class="item">
        <p>Theme</p>
        <ChangeTheme />
      </div>

      <div class="item">
        <p>Language</p>
        <div class="space-x-3">
          <ChangeLanguage />
        </div>
      </div>

      <div class="item">
        <p>Currency</p>
        <div class="space-x-3">
          <ChangeCurrency />
        </div>
      </div>
    </div>
  </drop-down-menu>
</template>

<style lang="scss" scope>
.settings {
  @apply fixed bottom-3 left-3 m-auto flex items-center rounded-full bg-base-300/50 p-2;
}

.item {
  @apply flex items-center justify-between space-x-4 bg-base-content/10 p-5;
}
</style>
