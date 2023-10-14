<script lang="ts" setup>
type PropsType = {
  title: string;
  urlImg: string;
  price: string;
};

const props = defineProps<PropsType>();
</script>

<template>
  <div class="relative flex flex-wrap justify-center">
    <div
      class="relative mx-1 my-3 min-w-[384px] max-w-sm cursor-pointer rounded-3xl bg-base-300 p-2 shadow-md"
    >
      <div class="relative overflow-x-hidden rounded-2xl">
        <img
          class="h-40 w-full rounded-2xl object-contain"
          :src="props.urlImg"
        />
        <p class="group absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 opacity-70 group-hover:opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </p>
      </div>
      <div class="mb-2 mt-4 flex justify-between pl-2">
        <div>
          <p class="mb-0 text-base font-semibold">{{ props.title }}</p>
          <p class="text-md mt-0 text-base">{{ props.price }}</p>
        </div>
        <div class="group mb-1 mr-4 flex cursor-pointer flex-col-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 group-hover:opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
