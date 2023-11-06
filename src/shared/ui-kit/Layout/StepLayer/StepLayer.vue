<script lang="ts" setup>
import { computed } from 'vue';

type PropsType = {
  currentStep: number;
  steps: string[];
};

const props = defineProps<PropsType>();

const emit = defineEmits<{
  (e: 'event:step', data: { index: number; text: string }): void;
}>();

const indexStep = computed(() => props.currentStep);

const compStyle = (index: number) => {
  return indexStep.value >= index ? 'step-primary' : '';
};
</script>
<template>
  <ul class="steps lg:steps-horizontal">
    <li
      v-for="(step, index) in props.steps"
      :key="index"
      class="step"
      :class="compStyle(index)"
      @click="() => emit('event:step', { index, text: step })"
    >
      {{ step }}
    </li>

    <!-- <li class="step step-primary">Register</li> -->
    <!-- <li class="step step-primary">Choose plan</li> -->
    <!-- <li class="step">Purchase</li> -->
    <!-- <li class="step">Receive Product</li> -->
  </ul>
</template>
