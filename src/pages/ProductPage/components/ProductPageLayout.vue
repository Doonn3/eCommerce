<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import SimpleSlider from '@shared/ui-kit/SimpleSlider/SimpleSlider.vue';
import ModalWindow from '@shared/ui-kit/ModalWindow/ModalWindow.vue';
import { useProductStore } from '@entities/Product';

import AboutProduct from './AboutProduct.vue';
import { useRouter } from 'vue-router';

const productStore = useProductStore();
const router = useRouter();

onMounted(() => {
  const productId = router.currentRoute.value.params.id;
  productStore.requestGetProductById(productId as string);
});

const handleChildClick = () => {
  console.log('add/remove from button');
};

// const imagesMassive = [
//   'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
//   'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg',
//   'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
//   'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg',
//   'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
//   'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg'
// ];

const isModalOpen = ref<boolean>(false);

const openCloseModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="block gap-5 sm:flex">
    <div class="sm:w-5/12">
      <SimpleSlider
        v-if="productStore.GetProduct ? productStore.GetProduct?.urlImages : false"
        :images-src="productStore.GetProduct?.urlImages || ['']"
        @event:click="openCloseModal"
      />
    </div>
    <AboutProduct
      @event:click="handleChildClick"
      :title="productStore.GetProduct?.name"
      :price="productStore.GetProduct?.priceData.price"
      :currency="productStore.GetProduct?.priceData.currency"
      :description="productStore.GetProduct?.descriptions"
      :is-bought="true"
      :is-button-loading="true"
    />
  </div>
  <modal-window
    @event:click="openCloseModal"
    v-show="isModalOpen"
  >
    <template v-slot:content><SimpleSlider :images-src="productStore.GetProduct?.urlImages || []" /></template>
  </modal-window>
</template>
