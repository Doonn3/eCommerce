<script lang="ts" setup>
type PropsType = {
  isDisabled: boolean;
  isChecked: boolean;
  isIndeterminate: boolean;
};

const props = withDefaults(defineProps<PropsType>(), {
  isDisabled: false,
  isChecked: false,
  isIndeterminate: true
});

const emit = defineEmits<{
  (e: 'change'): void;
}>();
</script>

<template>
  <input
    type="checkbox"
    class="toggle"
    :checked="props.isChecked"
    @change="() => emit('change')"
    :indeterminate="props.isIndeterminate"
    :disabled="props.isDisabled"
  />
</template>
