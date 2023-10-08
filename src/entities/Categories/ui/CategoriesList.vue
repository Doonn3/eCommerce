<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';

import { useCategoryStore } from '../store/useCategoryStore';
import { ref } from 'vue';

const categoryStore = useCategoryStore();

const isRootClick = ref(false);
const id = ref('');

const emit = defineEmits<{
  (e: 'click:id', id: string | undefined): void;
}>();
</script>

<template>
  <template v-if="!isRootClick">
    <SimpleButton
      v-for="category in categoryStore.GetRootCategories"
      :key="category?.id"
      :datatype="category?.id"
      @click="
        () => {
          isRootClick = true;
          id = category.id;
          categoryStore.GetCategoriesById(category.id);
          categoryStore.AddRouteCategory(category.id);
          emit('click:id', category?.id);
        }
      "
      :name="category.name"
  /></template>

  <template v-else>
    <SimpleButton
      v-for="category in categoryStore.GetCategoriesById(id)"
      :key="category?.id"
      :datatype="category?.id"
      @click="
        () => {
          id = category.id;
          categoryStore.GetCategoriesById(category.id);
          categoryStore.AddRouteCategory(category.id);
          emit('click:id', category?.id);
        }
      "
      :name="category.name"
  /></template>
</template>
