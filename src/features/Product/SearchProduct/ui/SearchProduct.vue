<script lang="ts" setup>
import { ref } from 'vue';

import { InputSearch } from '@shared/ui-kit/DataInput';
import { useProductStore } from '@entities/Product';
const productStore = useProductStore();

const model = ref('');

const onSearch = () => {
  productStore.requestProductSearch(model.value);
};
</script>

<template>
  <InputSearch
    v-model:model="model"
    @click:search="onSearch"
  />
</template>
