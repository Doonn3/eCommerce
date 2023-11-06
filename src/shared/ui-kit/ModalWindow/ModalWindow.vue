<template>
  <div
    class="modal modal-open cursor-pointer overflow-auto backdrop-blur-xl"
    @click="clickOutspace"
  >
    <div class="w-3/4 rounded bg-inherit">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['event:close']);

const clickOutspace = (e: MouseEvent) => {
  const eventTarget = e.target;
  if ((eventTarget as HTMLDivElement)!.classList.contains('modal')) {
    emit('event:close');
  }
};
</script>
