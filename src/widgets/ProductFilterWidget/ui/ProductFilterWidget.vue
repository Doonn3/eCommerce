<script lang="ts" setup>
import { ref } from 'vue';
import { DrawerMenu } from '@shared/ui-kit/Layout';
import { FeatureManufactorFilter } from '@features/ManufactorSearchFilter';
import { FeaturePriceSearchFilter } from '@features/PriceSearchFilter';
import FilterIcon from '@shared/ui-kit/assets/FilterIcon.vue';
const isOpen = ref(false);

const onSwitchOpen = () => {
  isOpen.value = !isOpen.value;
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
        <!-- <simple-form name="Price">
          <div class="flex flex-row space-x-5">
            <input
              type="text"
              class="h-10 w-full"
            />
            <input
              type="text"
              class="h-10 w-full"
            />
          </div>
        </simple-form> -->
        <FeaturePriceSearchFilter />
      </div>
    </drawer-menu>
  </div>
</template>
