<script lang="ts" setup>
import { PaginationLayer } from '@shared/ui-kit/Navigation';
import { DisplayCard } from '@shared/ui-kit/DataDisplay';
import { ProductList, useProductStore, useProductFilterStore } from '@entities/Product';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const productStore = useProductStore();
const productFilter = useProductFilterStore();

onMounted(() => {
  const { id } = route.params;
  if (id === undefined) {
    productStore.requestGetProducts();
  } else {
    productStore.requestGetProductsByCategory(id as string);
  }
  productFilter.requestManufacturers();
});
</script>

<template>
  <section class="product-list grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <product-list>
      <DisplayCard
        v-for="product in productStore.GetProducts"
        :key="product.id"
        :url-img="product.urlImage"
        :title="product.name"
        :descriptions="product.description"
        :price="product.price"
      />
    </product-list>

    <template v-if="productStore.GetTotalPaginationNumber > 1">
      <PaginationLayer
        class="absolute bottom-0 right-0 px-10"
        :amount="productStore.GetTotalPaginationNumber"
        @click="(val) => productStore.requestGetProducts(val - 1)"
      />
    </template>
  </section>
</template>
