<script lang="ts" setup>
import { JoinRadioInput } from '@shared/ui-kit/Layout';
import { useCategoryStore } from '@entities/Categories';

const categoryStore = useCategoryStore();
const emit = defineEmits<{
  (e: 'action:category-select', categoryId: string): void;
}>();
</script>

<template>
  <join-radio-input
    :isVertical="true"
    class="space-y-5"
  >
    <template v-if="categoryStore.IsEmptyCategoryStack">
      <input
        type="radio"
        class="btn join-item btn-neutral"
        name="options"
        aria-label="Back"
        @click="
          () => {
            categoryStore.PrevCategory();
          }
        "
      />
    </template>

    <input
      v-for="category in categoryStore.GetCategories"
      :key="category.id"
      type="radio"
      class="btn join-item btn-neutral"
      name="options"
      :aria-label="category.name"
      @click="
        () => {
          categoryStore.SelectCategoryById(category.id);
          emit('action:category-select', category.id);
        }
      "
    />
  </join-radio-input>
</template>
