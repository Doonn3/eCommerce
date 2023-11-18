<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';

import { FeatureManufactorFilter, FilterModel } from '@features/Product/ManufactorSearchFilter';
import { useProductFilterStore } from '../../../entities/Product';

const productFilterStore = useProductFilterStore();

const onClick = () => {
  console.log(FilterModel.Model(), '!QQQQQQQQQQQQQQ');
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
