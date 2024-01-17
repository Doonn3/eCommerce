<script lang="ts" setup>
type PropsType = {
  amount: number;
};

const props = withDefaults(defineProps<PropsType>(), {
  amount: 4
});

const emit = defineEmits<{
  (e: 'click', value: number): void;
}>();
</script>

<template>
  <div class="join">
    <template v-if="props.amount > 4">
      <button
        class="btn join-item"
        v-for="index in 4"
        :key="index"
        @click="
          () => {
            emit('click', index);
          }
        "
      >
        {{ index }}
      </button>
      <button
        class="btn join-item"
        @click="
          () => {
            emit('click', Math.floor(props.amount / 2));
          }
        "
      >
        ...
      </button>
    </template>
    <template v-else>
      <button
        class="btn join-item"
        v-for="index in props.amount"
        :key="index"
        @click="
          () => {
            emit('click', index);
          }
        "
      >
        {{ index }}
      </button>
    </template>

    <!-- <button class="btn join-item">1</button> -->
    <!-- <button class="btn join-item">2</button> -->
    <!-- <button class="btn btn-disabled join-item">...</button> -->
    <!-- <button class="btn join-item">99</button> -->
    <!-- <button class="btn join-item">100</button> -->
  </div>
</template>
