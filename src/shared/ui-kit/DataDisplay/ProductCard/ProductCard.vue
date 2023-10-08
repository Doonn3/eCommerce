<script lang="ts" setup>
export type PropsType = {
  title: string;
  urlImg: string;
  descriptions: string;
  price: string;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  title: 'Shoes!',
  urlImg: '',
  descriptions: 'If a dog chews shoes whose shoes does he choose?'
});
</script>

<template>
  <!-- <div class="max-w-xs overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"> -->
  <div class="h-full w-full rounded-lg border border-gray-400 bg-base-100 shadow-2xl">
    <div class="max-h-[100px] min-h-[100px] px-4 py-2">
      <h1 class="text-xl font-bold uppercase text-base-content">{{ $props.title }}</h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ props.descriptions }}</p>
    </div>
    <img
      class="mt-2 h-48 w-full object-cover"
      :src="props.urlImg"
      :alt="props.title"
    />

    <div class="flex items-center justify-between bg-base-100 px-4 py-2">
      <h1 class="text-lg font-bold text-base-content">{{ props.price }}</h1>
      <slot>
        <button
          class="rounded bg-white px-2 py-1 text-xs font-semibold uppercase text-gray-900 transition-colors duration-300 hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
        >
          Add to cart
        </button>
      </slot>
    </div>
  </div>
</template>
