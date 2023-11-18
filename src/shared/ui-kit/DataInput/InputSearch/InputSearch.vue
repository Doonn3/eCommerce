<script lang="ts" setup>
import MagnifyingGlassIcon from '../../assets/MagnifyingGlass.vue';

type PropsType = {
  model: string;
  placeholder?: string;
};

const props = defineProps<PropsType>();

const emit = defineEmits<{
  (e: 'update:model', value: string): void;
  (e: 'click:search'): void;
}>();

const onInput = (event: Event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement) {
    emit('update:model', target.value);
  }
};

const onClick = () => {
  emit('click:search');
};
</script>

<template>
  <div
    class="search-bar"
    @keydown.enter="emit('click:search')"
  >
    <button
      type="submit"
      class="search-btn"
      @click="onClick"
    >
      <MagnifyingGlassIcon class="stroke-white dark:stroke-base-content" />
    </button>
    <input
      type="text"
      class="input-search"
      :value="props.model"
      @input="onInput"
      :placeholder="props.placeholder || 'Search here...'"
    />
  </div>
</template>

<style lang="scss" scope>
.search-bar {
  @apply relative flex h-full;
}

.search-btn {
  @apply flex h-10 w-10 items-center justify-center rounded-s-xl bg-primary p-2;
}

.input-search {
  @apply input h-10 w-full border-none  p-2 focus:outline-none;
}
</style>
