<script lang="ts" setup>
import { SimpleInput } from '@shared/ui-kit/DataInput';
type PropsType = {
  name: string;
  state: 'success' | 'warning' | 'error';
  message: string;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  name: 'Input',
  message: 'Plz set text for input'
});

const textStateSyle = () => {
  if (props.state === undefined) return '';
  if (props.state === 'success') return 'text-success';
  if (props.state === 'warning') return 'text-warning';
  if (props.state === 'error') return 'text-error';
};
</script>
<template>
  <div class="flex flex-col space-y-4">
    <label class="space-x-2 text-xl">
      <span>{{ props.name }}</span>
      <span class="text-2xl text-red-700">*</span>
    </label>
    <SimpleInput :condition="props.state" />
    <p
      class="text-base"
      :class="textStateSyle()"
    >
      {{ message }}
    </p>
  </div>
</template>
