<script lang="ts" setup>
import { useProductFilterStore, useProductStore } from '@entities/Product';

import { HeaderWidget } from '@widgets/HeaderWidget';
import { CatalogMenuWidget } from '@widgets/Product/CatalogMenuWidget';

import CatalogLayout from '../Layouts/CatalogLayout.vue';
import AsideFilter from '../components/AsideFilter.vue';
import ProductsLayout from '../components/ProductsLayout.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const productStore = useProductStore();
const productFilterStore = useProductFilterStore();

const fetchProducts = () => {
  const { id } = route.params;

  if (id === undefined || id.length < 1) {
    productStore.requestGetProducts();
  } else {
    productStore.requestGetProductsByCategory(id as string);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <HeaderWidget />

  <template v-if="productStore.GetProducts?.length === 0">
    <p>Couldn't find any products for this request</p>
    <button @click="productStore.requestGetProducts()">Catalog</button>
  </template>

  <template v-else>
    <catalog-layout :is-aside-collapsed="productFilterStore.isManufacturers">
      <template v-slot:aside>
        <AsideFilter />
      </template>

      <template v-slot:content>
        <ProductsLayout />
      </template>
    </catalog-layout>
  </template>

  <div class="fixed inset-x-0 bottom-0 flex justify-center">
    <CatalogMenuWidget />
  </div>
</template>
