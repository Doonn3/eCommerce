<script lang="ts" setup>
import { CheckBox } from '@shared/ui-kit/DataInput';
import { useSwitch } from '@shared/lib/hooks';
type PropsType = {
  name: string;
  initState?: boolean;
};

const props = defineProps<PropsType>();

const toggle = useSwitch(props.initState);

export type EmitType = {
  checkStatus: boolean;
  name: string;
};

const emit = defineEmits<{ (e: 'change-info', event: EmitType): void }>();
</script>
<template>
  <div class="m-auto flex space-x-3">
    <CheckBox
      :is-checked="toggle.getState.value"
      @change="
        () => {
          toggle.onSwitch();
          emit('change-info', { checkStatus: toggle.getState.value, name: props.name });
        }
      "
    />
    <p>{{ props.name }}</p>
  </div>
</template>
