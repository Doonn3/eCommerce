<script lang="ts" setup>
type PropsType = {
  modelValue: string;

  placeholder: string;
  condition: 'success' | 'warning' | 'error' | 'default';
  isDisable: boolean;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  placeholder: 'Placeholder',
  isDisable: false
});

const emit = defineEmits(['update:modelValue']);

const inputStateStyle = () => {
  if (props.condition === undefined || props.condition === 'default') return '';
  if (props.condition === 'success') return 'input-success';
  if (props.condition === 'warning') return 'input-warning';
  if (props.condition === 'error') return 'input-error';
};

const onInput = (e: Event) => {
  const newValue: string = (e.target as HTMLInputElement).value;
  emit('update:modelValue', newValue);
};
</script>

<template>
  <input
    type="date"
    :placeholder="props.placeholder"
    :disabled="isDisable"
    class="input input-bordered w-full"
    :class="inputStateStyle()"
    @input="onInput"
    :value="props.modelValue"
  />
</template>
