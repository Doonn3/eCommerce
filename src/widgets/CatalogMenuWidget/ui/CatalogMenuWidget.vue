<script lang="ts" setup>
import { ProductFilterWidget } from '@widgets/ProductFilterWidget';
import { ModalWidget } from '@widgets/ModalWidget';
</script>

<template>
  <div class="group rounded-box z-[2000] flex space-x-2 bg-base-300 p-2">
    <ModalWidget />
    <ProductFilterWidget />
  </div>
</template>

<style lang="scss" scoped>
.group {
  pointer-events: none;

  * {
    display: flex;
    align-items: center;
    justify-content: center;

    max-height: 40px;
    max-width: 40px;
    height: 40px;
    width: 40px;

    padding: 0 5px;

    transition: 0.4s;
    pointer-events: auto;
    user-select: none;
    cursor: pointer;
  }

  *:hover {
    @apply bg-base-content/30;
  }
}
// .group:hover :slotted(*) {
//   background-color: red;
// }
</style>
