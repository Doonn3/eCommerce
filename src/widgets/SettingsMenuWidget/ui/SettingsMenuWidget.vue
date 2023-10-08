<script lang="ts" setup>
import { HorizontalMenu } from '@shared/ui-kit/Navigation';
import { ChangeTheme } from '@features/ChangeTheme';
import { ChangeLanguage } from '@features/ChangeLanguage';
import { ChangeCurrency } from '@features/ChangeCurrency';
</script>

<template>
  <horizontal-menu>
    <template v-slot:left>
      <ChangeLanguage />
    </template>
    <template v-slot:center>
      <ChangeCurrency />
    </template>
    <template v-slot:right>
      <li>
        <div><ChangeTheme class="max-w-5 max-h-5" /></div>
      </li>
    </template>
  </horizontal-menu>
</template>
