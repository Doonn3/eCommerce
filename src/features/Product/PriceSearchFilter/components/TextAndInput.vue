<script lang="ts" setup>
import { ref } from 'vue';
import { InputNumber } from '@shared/ui-kit/DataInput';

type PropsType = {
  id: string;
  placeHolder: string;
  initValue: number;
};

const props = defineProps<PropsType>();

const valueRef = ref(props.initValue);

export type EmitType = {
  id: string;
  value: number;
};

const emit = defineEmits<{ (e: 'info', emit: EmitType): void }>();

const onInput = (value: string) => {
  emit('info', { id: props.id, value: Number(value) });
};
</script>

<template>
  <div class="flex space-x-2">
    <InputNumber
      :pattern="{ min: 0, max: 100000000 }"
      v-model="valueRef"
      :place-holder="props.placeHolder"
      @event:input="onInput"
    />
  </div>
</template>
