<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  name?: string;
  isOpen: boolean;
}>();

const compStyleOpenClose = computed(() => {
  return props.isOpen ? 'dropdown-open' : '';
});
</script>

<template>
  <ul
    class="dropdown dropdown-top bg-base-300"
    :class="compStyleOpenClose"
  >
    <!-- <ul class="sdmenu sdmenu-horizontal px-1"> -->
    <li>
      <!-- <details :open="props.isOpen"> -->
      <summary>{{ props.name || 'Parent' }}</summary>
      <ul class="menu dropdown-content rounded-box z-[1] w-52 bg-base-300 p-2 shadow">
        <!-- <ul class="bg-base-100 p-2"> -->
        <slot
          ><li><a>Link 1</a></li></slot
        >
      </ul>
      <!-- </details> -->
    </li>
  </ul>
</template>
