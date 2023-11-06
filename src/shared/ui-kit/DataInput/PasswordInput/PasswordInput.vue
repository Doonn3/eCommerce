<script lang="ts" setup>
import { ref, computed } from 'vue';
import EyeIcon from '../../assets/EyeIcon.vue';
import EyeClosedIcon from '../../assets/EyeClosedIcon.vue';

type PropsType = {
  modelValue: string;
  condition: 'success' | 'warning' | 'error' | 'default';
  isShowPassword: boolean;
  isDisable: boolean;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  isShowPassword: false,
  isDisable: false
});

const isShowPasswordRef = ref(props.isShowPassword);
const computedIsShowPassword = computed(() => {
  return isShowPasswordRef.value ? 'text' : 'password';
});

const onClick = () => {
  isShowPasswordRef.value = !isShowPasswordRef.value;
};

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (e: Event) => {
  const newValue: string = (e.target as HTMLInputElement).value;
  emit('update:modelValue', newValue);
};

const inputStateStyle = () => {
  if (props.condition === undefined || props.condition === 'default') return '';
  if (props.condition === 'success') return 'input-success';
  if (props.condition === 'warning') return 'input-warning';
  if (props.condition === 'error') return 'input-error';
};
</script>

<template>
  <div class="relative mt-2 flex w-full items-center">
    <button
      class="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto"
      @click.prevent="onClick"
    >
      <EyeIcon
        v-if="isShowPasswordRef"
        fill="currentColor"
        class="mx-4 h-[24px] w-[24px] text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
      />

      <EyeClosedIcon
        v-else
        fill="currentColor"
        class="mx-4 h-[24px] w-[24px] text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
      />
    </button>

    <input
      :type="computedIsShowPassword"
      placeholder="********"
      class="input input-bordered w-full"
      :class="inputStateStyle()"
      :disabled="props.isDisable"
      @input="onInput"
      :value="props.modelValue"
    />
  </div>
</template>
