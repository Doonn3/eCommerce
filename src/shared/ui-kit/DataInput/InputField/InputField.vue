<script lang="ts" setup>
type PropsType = {
  name: string;
  status: 'success' | 'warning' | 'error' | 'default';
  message: string;
  isShowMessage: boolean;
  isRequired: boolean;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  name: 'Input',
  isShowMessage: true,
  isRequired: true
});

const textStateSyle = () => {
  if (props.status === undefined) return '';
  if (props.status === 'default') return '';
  if (props.status === 'success') return 'text-success';
  if (props.status === 'warning') return 'text-warning';
  if (props.status === 'error') return 'text-error';
};
</script>
<template>
  <div class="flex flex-col space-y-5">
    <label class="space-x-2 text-xl">
      <span>{{ props.name }}</span>
      <span
        v-if="props.isRequired"
        class="text-2xl text-red-700"
        >*</span
      >
    </label>
    <slot> </slot>

    <p
      v-show="props.isShowMessage"
      class="h-[8px] text-base"
      :class="textStateSyle()"
    >
      {{ message }}
    </p>
  </div>
</template>
