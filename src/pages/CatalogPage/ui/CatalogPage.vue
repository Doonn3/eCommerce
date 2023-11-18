<script lang="ts" setup>
import { useProductStore } from '@entities/Product';
import { HeaderWidget } from '@widgets/HeaderWidget';
import { CatalogMenuWidget } from '@widgets/Product/CatalogMenuWidget';

import CatalogLayout from '../Layouts/CatalogLayout.vue';

import AsideFilter from '../components/AsideFilter.vue';
import ProductsLayout from '../components/ProductsLayout.vue';

const productStore = useProductStore();
</script>

<template>
  <HeaderWidget />

  <template v-if="productStore.GetProducts?.length === 0">
    <p>Couldn't find any products for this request</p>
    <button @click="productStore.requestGetProducts()">Catalog</button>
  </template>

  <template v-else>
    <catalog-layout>
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
