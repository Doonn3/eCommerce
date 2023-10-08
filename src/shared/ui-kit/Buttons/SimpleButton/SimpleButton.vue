<script lang="ts" setup>
type PropsType = {
  name: string;
};

const props = withDefaults(defineProps<PropsType>(), {
  name: 'Simple Button'
});
</script>

<template>
  <button class="btn btn-wide">{{ props.name }}</button>
</template>
