<script lang="ts" setup>
type ColorStyleType =
  | 'btn-neutral'
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-accent'
  | 'btn-ghost'
  | 'btn-link'
  | 'btn-info'
  | 'btn-success'
  | 'btn-warning'
  | 'btn-error';

type OutlineType = 'btn-outline';

type PropsType = {
  name: string;
  options?: {
    colorStyle?: ColorStyleType;
    outlineStyle?: OutlineType;
  };
};

const props = withDefaults(defineProps<PropsType>(), {
  name: 'Simple Button'
});
</script>

<template>
  <button
    class="btn btn-wide"
    :class="[props.options?.outlineStyle, props.options?.colorStyle]"
  >
    {{ props.name }}
  </button>
</template>
