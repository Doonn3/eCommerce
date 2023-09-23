<script lang="ts" setup>
type PropsType = {
  isOpen: boolean;
};

const props = withDefaults(defineProps<PropsType>(), {
  isOpen: false
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <div class="drawer">
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
      :checked="props.isOpen"
    />
    <div class="drawer-side">
      <label
        for="my-drawer"
        class="drawer-overlay"
        @click.prevent="() => emit('click')"
      ></label>
      <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        <!-- Sidebar content here -->
        <!-- <li><a>Sidebar Item 1</a></li> -->
        <!-- <li><a>Sidebar Item 2</a></li> -->
        <slot @spec="['p']">
          <p>Этот текст разрешен</p>
        </slot>
      </ul>
    </div>
  </div>
</template>
