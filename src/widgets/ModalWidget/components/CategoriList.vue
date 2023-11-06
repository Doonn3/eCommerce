<script lang="ts" setup>
import { JoinRadioInput } from '@shared/ui-kit/Layout';
import { useCategoryStore } from '@entities/Categories';

const categoryStore = useCategoryStore();

const emit = defineEmits<{
  (e: 'event:select', id: string): void;
}>();
</script>

<template>
  <join-radio-input
    :isVertical="true"
    class="space-y-5"
  >
    <input
      v-for="category in categoryStore.GetCategories"
      :key="category.id"
      type="radio"
      class="btn btn-neutral join-item"
      name="options"
      :aria-label="category.name"
      @click="
        () => {
          categoryStore.SelectCategoryById(category.id);
          emit('event:select', category.id);
        }
      "
    />
  </join-radio-input>
</template>
