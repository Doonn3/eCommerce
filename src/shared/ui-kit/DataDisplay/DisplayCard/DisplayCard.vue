<script lang="ts" setup>
type PropsType = {
  title: string;
  urlImg: string;
  price: string;
  discountPrice?: string;
};

const props = defineProps<PropsType>();
</script>

<template>
  <div
    class="group flex max-h-[400px] min-h-[400px] w-full max-w-xs cursor-pointer flex-col self-center overflow-hidden rounded-lg border border-gray-100/30 bg-gray-700 shadow-md hover:border-gray-100/50"
  >
    <div class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
      <img
        class="peer absolute right-0 top-0 h-full w-full object-cover"
        :src="props.urlImg"
        alt="product image"
      />
      <!-- <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> -->
    </div>
    <div class="mt-4 px-5 pb-5">
      <div class="max-h-[60px] overflow-hidden">
        <h5 class="text-xl tracking-tight text-white">{{ props.title }}</h5>
      </div>
      <div class="mb-5 mt-2 flex items-center justify-between">
        <p class="space-x-3">
          <span class="text-3xl font-bold text-white">{{ props.price }}</span>
          <template v-if="props.discountPrice">
            <span class="text-sm text-white line-through">{{ props.discountPrice }}</span>
          </template>
        </p>
      </div>

      <slot>
        <button
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white/40 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add to cart
        </button>
      </slot>
    </div>
  </div>
</template>
