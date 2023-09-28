<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    isDisabled: boolean;
    isChecked: boolean;
  }>(),
  {
    isDisabled: false,
    isChecked: false
  }
);

const emit = defineEmits<{
  (e: 'change'): void;
}>();
</script>

<template>
  <input
    type="checkbox"
    :checked="props.isChecked"
    @change="() => emit('change')"
    class="checkbox"
    :disabled="props.isDisabled"
  />
</template>
