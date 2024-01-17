<script lang="ts" setup>
import { computed } from 'vue';
type PropsType = {
  isAsideCollapsed: boolean;
};

const props = defineProps<PropsType>();

const isCollapsedStyle = computed(() => {
  return props.isAsideCollapsed ? 'grid-cols-[auto]' : 'grid-cols-[20%_auto]';
});
</script>

<template>
  <section
    class="catalog relative grid grid-flow-col grid-cols-[20%_auto] p-2"
    :class="isCollapsedStyle"
  >
    <div
      class="space-y-2 border-r-4 border-base-content pr-2"
      v-if="!props.isAsideCollapsed"
    >
      <slot name="aside"></slot>
    </div>

    <div>
      <slot name="content"></slot>
    </div>
  </section>
</template>
