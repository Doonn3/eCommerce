<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { useProductFilterStore } from '@entities/Product';

import { FeatureManufactorFilter, FilterModel } from '@features/Product/ManufactorSearchFilter';

const productFilterStore = useProductFilterStore();

const onClick = () => {
  productFilterStore.filter({ manufacturer: FilterModel.Model() });
};
</script>

<template>
  <FeatureManufactorFilter />
  <SimpleButton
    name="Apply"
    :options="{ colorStyle: 'btn-accent' }"
    class="w-full"
    @click="onClick"
  />
</template>
