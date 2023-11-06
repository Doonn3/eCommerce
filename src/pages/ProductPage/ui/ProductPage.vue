<template>
  <div class="block flex-row-reverse gap-5 sm:flex">
    <div class="mt-10 flex justify-center sm:w-7/12">
      <div class="w-3/4">
        <h2 class="mb-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">Lorem ipsum dolor, sit amet consectetur, adipisicing elit.</h2>
        <p class="text-sm text-gray-500">
          By
          <a
            href="#"
            class="text-indigo-600 hover:underline"
            >ABC Company</a
          >
        </p>

        <div class="my-4 flex items-center space-x-4">
          <div>
            <div class="flex rounded-lg bg-gray-100 px-3 py-2">
              <span class="mr-1 mt-1 text-indigo-400">$</span>
              <span class="text-3xl font-bold text-indigo-600">25</span>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-xl font-semibold text-green-500">Save 12%</p>
            <p class="text-sm text-gray-400">Inclusive of all Taxes.</p>
          </div>
        </div>
        <p class="text-gray-500">
          {{ productDescription }}
        </p>

        <div class="flex space-x-4 py-4">
          <AddRemoveButton
            button-text="Add to Cart"
            :isLoading="false"
            :image-src="addToCartSvg"
            @event:click="handleChildClick"
          />
        </div>
      </div>
    </div>
    <div class="mb-20 sm:w-5/12">
      <SimpleSlider
        :images-src="imagesMassive"
        @event:click="openCloseModal"
      />
    </div>
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
import AddRemoveButton from '@shared/ui-kit/Buttons/AddRemoveButton/AddRemoveButton.vue';
import SimpleSlider from '@shared/ui-kit/SimpleSlider/SimpleSlider.vue';
import ModalWindow from '@shared/ui-kit/ModalWindow/ModalWindow.vue';
import addToCartSvg from '@shared/assets/add-icon.svg';
import { ref } from 'vue';

const handleChildClick = () => {
  console.log('click button');
};
const imagesMassive = [
  'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
  'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg',
  'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
  'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg',
  'https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg',
  'http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/10688318/1481975594357.jpg'
];
const productDescription =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloremque esse similique et vel, accusantium adipisci quo totam ducimus incidunt temporibus, qui ipsum quisquam voluptates saepe neque. Sit quibusdam, facere tempore facilis, suscipit nisi cumque unde ipsam aut accusamus totam libero pariatur maiores voluptatum quaerat consequuntur voluptate animi! Voluptatibus, dolore!';
const isModalOpen = ref<boolean>(false);

const openCloseModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>
