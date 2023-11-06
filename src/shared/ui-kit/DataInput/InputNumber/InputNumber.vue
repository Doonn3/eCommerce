<script lang="ts" setup>
type PropsType = {
  placeHolder: string;
  condition: 'success' | 'warning' | 'error';
  isDisable: boolean;
  pattern: {
    min: number;
    max: number;
  };
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  placeHolder: '123',
  isDisable: false
});

const emit = defineEmits<{
  (e: 'event:input', value: string): void;
}>();

const onInput = (event: Event) => {
  event.preventDefault();

  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  const value = Number(target.value);

  if (props.pattern !== undefined) {
    if (value < props.pattern.min) {
      target.value = String(props.pattern.min);
    } else if (value > props.pattern.max) {
      target.value = String(props.pattern.max);
    }
  }
  emit('event:input', target.value);
};

const inputStateStyle = () => {
  if (props.condition === undefined) return '';
  if (props.condition === 'success') return 'input-success';
  if (props.condition === 'warning') return 'input-warning';
  if (props.condition === 'error') return 'input-error';
};
</script>

<template>
  <input
    type="number"
    :placeholder="props.placeHolder"
    class="input input-bordered w-full"
    :class="inputStateStyle()"
    :disabled="props.isDisable"
    @input="onInput"
    :min="props.pattern?.min"
    :max="props.pattern?.max"
    pattern="^(100|[1-9][0-9]?|0)$"
  />
</template>
