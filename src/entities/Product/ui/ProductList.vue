<script lang="ts" setup>
import { CardImageOverlaySkeleton } from '@shared/ui-kit/DataDisplay';
import { useProductStore } from '../store/useProductStore';

const productStore = useProductStore();
</script>

<template>
  <template v-if="productStore.IsLoading">
    <CardImageOverlaySkeleton
      v-for="index in 20"
      :key="index"
    />
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>
