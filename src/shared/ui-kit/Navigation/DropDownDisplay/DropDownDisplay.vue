<script lang="ts" setup>
import { ref, computed } from 'vue';
import UserIcon from '../../assets/UserIcon.vue';
type PropsType = {
  name: string;
};

const props = defineProps<Partial<PropsType>>();

const isOpen = ref(false);

const onClick = () => {
  isOpen.value = !isOpen.value;
};

const openStyle = computed(() => {
  return isOpen.value ? '' : 'hidden';
});
</script>

<template>
  <div class="relative z-10 inline-block">
    <!-- Dropdown toggle button -->
    <button
      class="btn btn-accent btn-outline relative flex items-center px-2"
      @click="onClick"
    >
      <span class="mx-1">{{ props.name || 'Default Name' }}</span>
      <svg
        class="mx-1 h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>

    <!-- Dropdown menu -->
    <!-- x-show="isOpen"
x-transition:enter="transition ease-out duration-100"
x-transition:enter-start="opacity-0 scale-90"
x-transition:enter-end="opacity-100 scale-100"
x-transition:leave="transition ease-in duration-100"
x-transition:leave-start="opacity-100 scale-100"
x-transition:leave-end="opacity-0 scale-90" -->
    <div
      class="absolute right-0 mt-2 w-56 origin-top-right overflow-hidden rounded-md bg-base-300 py-2 shadow-xl"
      :class="openStyle"
    >
      <div class="mx-1 -mt-2 flex items-center p-3">
        <h1 class="text-base font-semibold">{{ props.name || 'Profile' }}</h1>
      </div>

      <hr class="border-gray-200 dark:border-gray-700" />

      <slot>
        <a
          href="#"
          class="flex p-3 text-sm capitalize"
        >
          <UserIcon />
          <span class="mx-1 text-base-content">view profile</span>
        </a>
      </slot>
    </div>
  </div>
</template>
