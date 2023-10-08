<script lang="ts" setup>
import { ref } from 'vue';

type PropsType = {
  name: string;
  placeHolder: string;
  initValue: number;
};

const props = defineProps<PropsType>();

const valueRef = ref(props.initValue);

export type EmitType = {
  name: string;
  value: number;
};

const emit = defineEmits<{ (e: 'info', emit: EmitType): void }>();

const onInput = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  emit('info', { name: props.name, value: Number(target.value) });
};
</script>

<template>
  <div class="flex space-x-2">
    <p>{{ props.name }}</p>
    <input
      class="w-full"
      type="number"
      :placeholder="props.placeHolder"
      :value="valueRef"
      @input="onInput"
    />
  </div>
</template>
