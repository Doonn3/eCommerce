<script lang="ts" setup>
type PropsType = {
  isVertical: boolean;
};

const props = defineProps<PropsType>();
</script>

<template>
  <div
    class="join"
    :class="props.isVertical ? 'join-vertical' : 'join-horizontal'"
  >
    <slot>
      <input
        class="btn join-item"
        type="radio"
        name="options"
        aria-label="Radio 1"
      />
      <input
        class="btn join-item"
        type="radio"
        name="options"
        aria-label="Radio 2"
      />
      <input
        class="btn join-item"
        type="radio"
        name="options"
        aria-label="Radio 3"
      />
    </slot>
  </div>
</template>
