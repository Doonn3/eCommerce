<script lang="ts" setup>
type OptionType = {
  value: string;
  text?: string;
};

type PropsType = {
  id: string;
  label: string;
  status: 'success' | 'warning' | 'error' | 'default';
  options: OptionType[];
};

const props = defineProps<PropsType>();

const emit = defineEmits<{
  (e: 'event:select', select: string): void;
}>();

const onSelect = (e: Event) => {
  if (!(e.target instanceof HTMLSelectElement)) return;
  if (e.target.selectedIndex === 0) {
    emit('event:select', '');
    return;
  }
  emit('event:select', e.target.value);
};

const inputStateStyle = () => {
  if (props.status === undefined || props.status === 'default') return '';
  if (props.status === 'success') return 'input-success';
  if (props.status === 'warning') return 'input-warning';
  if (props.status === 'error') return 'input-error';
};
</script>

<template>
  <!-- <label -->
  <!-- :for="props.id" -->
  <!-- class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" -->
  <!-- > -->
  <!-- {{ props.label || 'Select Options' }} -->
  <!-- </label> -->
  <select
    :id="props.id"
    class="input input-bordered w-full"
    :class="inputStateStyle()"
    @change.prevent="onSelect"
  >
    <!-- class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white 
dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" -->
    <option selected>{{ props.label || 'Select Options' }}</option>
    <option
      v-for="(option, index) in props.options"
      :key="index"
      :value="option.value"
    >
      {{ option.text || option.value }}
    </option>
    <!-- <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option> -->
  </select>
</template>
