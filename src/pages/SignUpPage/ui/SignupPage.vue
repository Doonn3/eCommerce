<script lang="ts" setup>
import { StepLayer } from '@shared/ui-kit/Layout';

import { MainLayer } from '../components/MainLayer';
import { AddressLayer } from '../components/AddressLayer';
import { FinishLayer } from '../components/FinishLayer';
import { billingForm, shippingForm } from '../model/AddressModel';

import { useSteps } from '@shared/lib/composables';
import { useState } from '../model/statePage';

const stepsLayer = ['Data', 'Shipping Address', 'Billing Address', 'Finish'];

const steps = useSteps({ step: 0, options: { min: 0, max: stepsLayer.length - 1 } });

const state = useState();

const isShow = (num: number) => {
  return steps.State.value.step === num;
};
</script>
<template>
  <section class="sign-up">
    <StepLayer
      class="sign-up__step-layer"
      :steps="stepsLayer"
      :current-step="steps.State.value.step"
      @event:step="(step) => steps.setStep(step.index)"
    />
    <div class="sign-up__content">
      <MainLayer
        v-show="isShow(0)"
        @emit-form="
          (data) => {
            state.setMainData(data);
            steps.next();
          }
        "
      />

      <AddressLayer
        v-show="isShow(1)"
        :form="shippingForm"
        @update:model="(data) => (shippingForm.state = data)"
        @emit:back="steps.prev"
        @emit:form="
          (data) => {
            state.setShippingAddress(data);
            steps.next();
          }
        "
      />
      <!--  @update:model="(data) => (billingForm.state = data)" -->
      <AddressLayer
        v-show="isShow(2)"
        :form="billingForm"
        @emit:back="steps.prev"
        @emit:form="
          (data) => {
            state.setBillingAddress(data);
            steps.next();
          }
        "
      />

      <FinishLayer v-if="isShow(3)" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sign-up {
  @apply flex flex-col w-full p-5 md:w-[70%] m-auto h-full;

  &__step-layer {
    @apply h-[10%];
  }

  &__content {
    @apply flex flex-col justify-center h-[90%];
  }
}
</style>
