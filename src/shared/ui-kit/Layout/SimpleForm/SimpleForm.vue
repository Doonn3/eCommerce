<script lang="ts" setup>
type PropsType = {
  name: string;
};

const props = withDefaults(defineProps<PropsType>(), {
  name: 'Settings'
});
</script>

<template>
  <section class="max-w-4xl space-y-5 rounded-md bg-base-300 p-2 shadow-md">
    <h2 class="text-lg font-semibold capitalize text-base-content">{{ props.name }}</h2>
    <div>
      <slot>
        <p>Text</p>
      </slot>
    </div>
  </section>
</template>
