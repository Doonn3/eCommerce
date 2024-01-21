<script lang="ts" setup>
import { PaginationLayer } from '@shared/ui-kit/Navigation';
import { ProductList, useProductStore } from '@entities/Product';
import { ProductCard } from '@features/Product/ProductCard';

const productStore = useProductStore();
</script>

<template>
  <section class="product-list grid place-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <product-list>
      <ProductCard
        v-for="product in productStore.GetProducts"
        :key="product.id"
        :id="product.id"
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
