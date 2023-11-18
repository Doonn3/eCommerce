<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { useRouter } from 'vue-router';
import { useProductStore, useProductFilterStore } from '@entities/Product';
import { useCategoryStore } from '@entities/Categories';
type PropsType = {
  categoryId: string;
};

const router = useRouter();
const productStore = useProductStore();
const category = useCategoryStore();

const productFilter = useProductFilterStore();

const props = defineProps<PropsType>();

const emit = defineEmits<{
  (e: 'action:click'): void;
}>();

const onSubmit = () => {
  if (!category.IsEmptyCategoryStack) {
    productStore.requestGetProducts();
    productFilter.reset();
    router.push('/catalog');
    return;
  }

  router.push({ name: 'catalog', params: { category: 'category', id: props.categoryId } });

  productStore.requestGetProductsByCategory(props.categoryId);
  productFilter.requestManufacturers(props.categoryId);

  // router.push({ name: 'catalog', params: { category: 'category', id: props.categoryId } });
  emit('action:click');
};
</script>

<template>
  <SimpleButton
    name="Look"
    :options="{ colorStyle: 'btn-accent', outlineStyle: 'btn-outline' }"
    @click="onSubmit"
    :is-loading="productStore.IsLoading"
  />
</template>
