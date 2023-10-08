<script lang="ts" setup>
import { ProductFilterWidget } from '@widgets/ProductFilterWidget';
import CategoryLayout from '../components/CategoryLayout.vue';
import ProductsLayout from '../components/ProductsLayout.vue';
</script>

<template>
  <section class="catalog relative grid grid-flow-row gap-5 p-10">
    <!-- <CategoryLayout /> -->
    <ProductsLayout />
    <ProductFilterWidget class="absolute right-0 top-0" />
  </section>
</template>
