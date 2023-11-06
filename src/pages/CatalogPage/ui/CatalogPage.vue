<script lang="ts" setup>
import ProductsLayout from '../components/ProductsLayout.vue';
import { HeaderWidget } from '@widgets/HeaderWidget';
import { CatalogMenuWidget } from '@widgets/CatalogMenuWidget';
</script>

<template>
  <HeaderWidget />
  <section class="catalog relative grid grid-flow-row gap-5 p-10">
    <ProductsLayout />

    <div class="fixed inset-x-0 bottom-0 flex justify-center">
      <CatalogMenuWidget />
    </div>
  </section>
</template>
