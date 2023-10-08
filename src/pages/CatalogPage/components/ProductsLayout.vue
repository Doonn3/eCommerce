<script lang="ts" setup>
import { PaginationLayer } from '@shared/ui-kit/Navigation';
import { ProductCard } from '@shared/ui-kit/DataDisplay';
import { ProductList, useProductStore, useProductFilterStore } from '@entities/Product';
import { onMounted } from 'vue';

const productStore = useProductStore();
const productFilter = useProductFilterStore();

onMounted(() => {
  productStore.requestGetProducts();
  productFilter.requestManufacturers();
});
</script>

<template>
  <section
    class="product-list grid min-h-[320px] min-w-[320px] grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
  >
    <product-list>
      <ProductCard
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
