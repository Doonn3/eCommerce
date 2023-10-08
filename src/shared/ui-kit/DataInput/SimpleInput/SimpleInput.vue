<script lang="ts" setup>
import { computed, defineEmits } from 'vue';
type PropsType = {
  type: string;
  placeholder: string;
  condition: 'input-success' | 'input-warning' | 'input-error';
  isDisable: boolean;
};

const props = withDefaults(defineProps<PropsType>(), {
  type: 'text',
  placeholder: '',
  isDisable: false
});

const emit = defineEmits(['event:input']);

const getClass = () => computed(() => (props.condition ? props.condition : ''));
const getPlaceholder = () => (props.placeholder ? props.placeholder : '');
const getType = () => (props.type ? props.type : 'text');
const onInput = (e: Event) => {
  const newValue: string = (e.target! as HTMLInputElement).value;
  emit('event:input', newValue);
};
</script>

<template>
  <input
    :type="getType()"
    :placeholder="getPlaceholder()"
    :class="getClass"
    :disabled="isDisable"
    class="input input-bordered w-full max-w-xs"
    @input="onInput"
  />
</template>
