<script lang="ts" setup>
import { defineEmits } from 'vue';
type PropsType = {
  type: 'text' | 'number';
  placeholder: string;
  condition: 'success' | 'warning' | 'error';
  isDisable: boolean;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  type: 'text',
  placeholder: 'Placeholder',
  isDisable: false
});

const emit = defineEmits(['event:input']);

const inputStateStyle = () => {
  if (props.condition === undefined) return '';
  if (props.condition === 'success') return 'input-success';
  if (props.condition === 'warning') return 'input-warning';
  if (props.condition === 'error') return 'input-error';
};

const onInput = (e: Event) => {
  const newValue: string = (e.target! as HTMLInputElement).value;
  emit('event:input', newValue);
};
</script>

<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :disabled="isDisable"
    class="input input-bordered w-full max-w-xs"
    :class="inputStateStyle()"
    @input="onInput"
  />
</template>
