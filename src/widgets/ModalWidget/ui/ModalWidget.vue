<script lang="ts" setup>
import ModalWindow from '@shared/ui-kit/ModalWindow/ModalWindow.vue';
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { useSwitch } from '@shared/lib/hooks/';
import { useCategoryStore } from '@entities/Categories';
import { useProductStore } from '@entities/Product';
import CategoriList from '../components/CategoriList.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const categoryStore = useCategoryStore();
const productStore = useProductStore();

categoryStore.RequestAllCategories();

const toggle = useSwitch(false);

let tempID = '';

const handlerCategorySelect = (id: string) => {
  tempID = id;
};

const onClickSubmit = () => {
  productStore.requestGetProductsByCategory(tempID).finally(() => toggle.off());
  router.push({ name: 'catalog', params: { id: tempID } });
};
</script>

<template>
  <button
    class="absolute"
    @click="toggle.on"
  >
    MODAL
  </button>
  <template v-if="toggle.getState.value">
    <modal-window @event:close="toggle.off">
      <template v-slot:content>
        <div class="flex justify-around p-2">
          <CategoriList @event:select="handlerCategorySelect" />
        </div>
      </template>
      <div class="absolute bottom-0 py-8">
        <SimpleButton
          name="Look"
          :options="{ colorStyle: 'btn-accent', outlineStyle: 'btn-outline' }"
          @click="onClickSubmit"
        />
      </div>
    </modal-window>
  </template>
</template>
