<script lang="ts" setup>
import { ref } from 'vue';

const showContent = ref(false);

const toggleContent = () => {
  showContent.value = !showContent.value;
};
</script>

<template>
  <div>
    <div class="relative">
      <div class="flex items-center space-x-3">
        <button
          class="btn btn-xs"
          @click="toggleContent"
        >
          Click
        </button>
        <p class="text">Settings</p>
      </div>

      <div
        class="content flex h-full flex-row"
        v-show="showContent"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  @apply text-sm font-extrabold text-base-content drop-shadow-md;
}
.content {
  @apply absolute left-0 mb-2 min-h-[300px] min-w-[400px] bg-base-300/90 p-2;
  transition: max-height 0.4s ease-out;
  max-height: 0;
  overflow: hidden;
  bottom: 100%;
}

.content[v-show='true'] {
  max-height: none;
}
</style>
