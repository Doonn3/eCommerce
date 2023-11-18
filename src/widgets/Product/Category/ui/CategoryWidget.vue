<script lang="ts" setup>
import { ref } from 'vue';

import ModalWindow from '@shared/ui-kit/ModalWindow/ModalWindow.vue';
import CategoryIcon from '@shared/ui-kit/assets/CategoryIcon.vue';
import { useSwitch } from '@shared/lib/composables';
import { useCategoryStore } from '@entities/Categories';
import { ProductCategoryList, ProductCategorySelect } from '@features/Product/Category/';

const categoryStore = useCategoryStore();

categoryStore.RequestAllCategories();

const toggle = useSwitch(false);

const selectCategoryID = ref('');
</script>

<template>
  <div>
    <button @click="toggle.on">
      <CategoryIcon class="h-full w-full fill-base-content" />
    </button>
    <template v-if="toggle.getState.value">
      <modal-window @event:close="toggle.off">
        <template v-slot:content>
          <div class="flex justify-around p-2">
            <ProductCategoryList @action:category-select="(id) => (selectCategoryID = id)" />
          </div>
        </template>
        <div class="absolute bottom-0 py-8">
          <ProductCategorySelect
            :category-id="selectCategoryID"
            @action:click="toggle.off"
          />
        </div>
      </modal-window>
    </template>
  </div>
</template>
