<template>
  <div
    class="mb-36 mt-10 flex justify-center overflow-auto sm:mb-0 sm:mt-20 sm:w-7/12"
    style="height: 70vh"
  >
    <div class="w-3/4">
      <h2 class="mb-5 text-center text-2xl font-bold leading-tight tracking-tight md:text-3xl">
        {{ props.title }}
      </h2>

      <p class="text-gray-500">
        {{ props.description }}
      </p>
      <div class="mt-10 flex">
        <div class="flex rounded-lg bg-gray-100 px-3 py-2">
          <span class="mr-1 mt-1 text-indigo-400">{{ props.currency }}</span>
          <span class="text-3xl font-bold text-indigo-600">{{ props.price }}</span>
        </div>
      </div>
      <div class="mt-5 flex justify-center space-x-4 py-4">
        <AddRemoveButton
          :button-text="getButtonText"
          :image-src="getButtonImage"
          :is-loading="getButtonLoading"
          @event:click="handleChildClick"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import AddRemoveButton from '@shared/ui-kit/Buttons/AddRemoveButton/AddRemoveButton.vue';
import addToCartSvg from '@shared/assets/add-icon.svg';
import deletefromCartSvg from '@shared/assets/deleteFromCart.svg';

type PropsType = {
  title: string;
  price: string;
  currency: string;
  description: string;
  isButtonLoading: boolean;
  isBought: boolean;
};

const props = withDefaults(defineProps<PropsType>(), {
  title: 'title',
  price: '25',
  currency: '$',
  description: 'description',
  isButtonLoading: false,
  isBought: false
});

const getButtonLoading = computed(() => {
  return props.isButtonLoading ? true : false;
});

const getButtonImage = computed(() => {
  return props.isBought ? deletefromCartSvg : addToCartSvg;
});

const getButtonText = computed(() => {
  return props.isBought ? 'Delete from cart' : 'Add to Cart';
});

const emit = defineEmits(['event:click']);

const handleChildClick = () => {
  emit('event:click');
};
</script>
