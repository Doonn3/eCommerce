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
  @apply absolute flex h-10 w-10 items-center justify-center rounded-full p-2 hover:bg-base-300;
}

.input-search {
  @apply input h-10 w-full rounded-full border-none p-2 pl-10 focus:outline-none;
}
</style>
