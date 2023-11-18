<script lang="ts" setup>
import { ref } from 'vue';

import { useSwitch } from '@shared/lib/composables';
import { DrawerMenu } from '@shared/ui-kit/Layout';
import CategoryIcon from '@shared/ui-kit/assets/CategoryIcon.vue';
import { ProductCategoryList, ProductCategorySelect } from '@features/Product/Category';
import { useCategoryStore } from '../../../../entities/Categories';

const categoryStore = useCategoryStore();

categoryStore.RequestAllCategories();

const toggle = useSwitch(false);

let idRef = ref<string | null>(null);
</script>

<template>
  <div>
    <button
      ref="HamburgerButtonRef"
      @click.prevent="toggle.on"
    >
      <CategoryIcon class="h-full w-full fill-base-content" />
    </button>
    <drawer-menu
      :is-open="toggle.getState.value"
      @click="toggle.off"
    >
      <div class="flex flex-col items-center space-y-5">
        <ProductCategoryList
          class="w-full"
          @action:category-select="(_id) => (idRef = _id)"
        />
        <ProductCategorySelect :category-id="idRef || ''" />
      </div>
    </drawer-menu>
  </div>
</template>
