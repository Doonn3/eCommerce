<template>
  <div class="block gap-5 sm:flex">
    <div class="sm:w-5/12">
      <SimpleSlider
        :images-src="imagesMassive"
        @event:click="openCloseModal"
      />
    </div>
    <AboutProduct
      @event:click="handleChildClick"
      title="product"
      price="50"
      currency="$"
      description="the product is fine"
      :is-bought="false"
      :is-button-loading="false"
    />
  </div>
  <ModalWindow
    @event:click="openCloseModal"
    v-show="isModalOpen"
  >
    <template v-slot:content><SimpleSlider :images-src="imagesMassive" /></template>
  </ModalWindow>
  <SettingsMenuWidget class="fixed bottom-0 left-1/2 translate-x-[-50%]" />
</template>

<script lang="ts" setup>
import { SettingsMenuWidget } from '@widgets/SettingsMenuWidget';
import SimpleSlider from '@shared/ui-kit/SimpleSlider/SimpleSlider.vue';
import AboutProduct from '@pages/ProductPage/components/AboutProduct.vue';
import ModalWindow from '@shared/ui-kit/ModalWindow/ModalWindow.vue';
import { useProductStore } from '@entities/Product';
import { ref, onMounted } from 'vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.requestGetProducts();
});

console.log(productStore.GetProducts);

const handleChildClick = () => {
  console.log('add/remove from button');
};

const imagesMassive = [
  'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
  'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg',
  'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
  'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg',
  'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
  'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg'
];

const isModalOpen = ref<boolean>(false);

const openCloseModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>
