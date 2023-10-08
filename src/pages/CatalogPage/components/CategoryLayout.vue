<script lang="ts" setup>
import { useCategoryStore, CategoriesList } from '@entities/Categories';
import { useProductStore } from '@entities/Product';
import { onMounted, ref } from 'vue';

const categoryStore = useCategoryStore();

const productStore = useProductStore();

onMounted(() => {
  categoryStore.requestAllCategories();
});

let tempID = ref<string | null>(null);

const onClick = (id: string | undefined) => {
  if (id === undefined) return;
  tempID.value = id;
  productStore.requestGetProductsByCategory(id);
};
</script>

<template>
  <section class="category-list grid grid-flow-col place-items-center">
    <CategoriesList @click:id="onClick" />
  </section>
</template>
