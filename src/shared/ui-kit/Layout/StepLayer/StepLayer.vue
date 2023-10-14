<script lang="ts" setup>
import { ref } from 'vue';

type PropsType = {
  steps: string[];
};

const props = defineProps<PropsType>();

const emit = defineEmits<{
  (e: 'event:step', data: { index: number; text: string }): void;
}>();

const indexStep = ref(0);

const compStyle = (index: number) => {
  if (indexStep.value >= index) return 'step-primary';
  return '';
};
</script>
<template>
  <ul class="steps steps-vertical lg:steps-horizontal">
    <li
      v-for="(step, index) in props.steps"
      :key="index"
      class="step"
      :class="compStyle(index)"
      @click="
        () => {
          indexStep = index;
          emit('event:step', { index, text: step });
        }
      "
    >
      {{ step }}
    </li>

    <!-- <li class="step step-primary">Register</li> -->
    <!-- <li class="step step-primary">Choose plan</li> -->
    <!-- <li class="step">Purchase</li> -->
    <!-- <li class="step">Receive Product</li> -->
  </ul>
</template>
