<script lang="ts" setup>
import { ref } from 'vue';

import { DrawerMenu } from '@shared/ui-kit/Layout';
import FilterIcon from '@shared/ui-kit/assets/FilterIcon.vue';
import { FeatureManufactorFilter } from '@features/Product/ManufactorSearchFilter';
import { FeaturePriceSearchFilter } from '@features/Product/PriceSearchFilter';
import { useRoute } from 'vue-router';
import { useProductFilterStore } from '../../../../entities/Product';

const route = useRoute();
const productFilter = useProductFilterStore();

const isOpen = ref(false);

const onSwitchOpen = () => {
  isOpen.value = !isOpen.value;

  init();
};

const init = () => {
  const categoryId = route.params.id;

  if (categoryId.length < 1 || categoryId === undefined) return;

  console.log(categoryId, 'categoryId');

  productFilter.requestManufacturers(categoryId as string);
};
</script>

<template>
  <div>
    <button
      ref="HamburgerButtonRef"
      @click.prevent="onSwitchOpen"
    >
      <FilterIcon class="h-full w-full stroke-base-300" />
    </button>
    <drawer-menu
      :is-open="isOpen"
      @click="onSwitchOpen"
    >
      <div class="space-y-5">
        <FeatureManufactorFilter />

        <FeaturePriceSearchFilter />
      </div>
    </drawer-menu>
  </div>
</template>
