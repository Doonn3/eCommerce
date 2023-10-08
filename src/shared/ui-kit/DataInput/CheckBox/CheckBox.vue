<script lang="ts" setup>
type PropsType = {
  isDisabled: boolean;
  isChecked: boolean;
};
const props = withDefaults(defineProps<Partial<PropsType>>(), {
  isDisabled: false,
  isChecked: false
});

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
