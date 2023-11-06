<script lang="ts" setup>
import { StepLayer } from '@shared/ui-kit/Layout';
import { MainLayer } from '../components/MainLayer';
import AddressLayer from './AddressLayer/AddressLayer.vue';
import FinishLayer from './FinishLayer/FinishLayer.vue';
import { useState } from '../model/statePage';
import { billingForm, shippingForm } from './AddressLayer/model/AddressLayerModel';

const state = useState();
const isShow = (index: number) => {
  return state.currStep === index;
};
</script>
<template>
  <section class="sign-up m-auto h-[100vh] w-[100%] space-y-2 p-5 md:w-[70%]">
    <step-layer
      :steps="['Data', 'Shipping Address', 'Billing Address', 'Finish']"
      :current-step="state.currStep"
      class="w-full"
      @event:step="(val) => state.next()"
    />
    <div class="h-full">
      <MainLayer v-show="isShow(0)" />
      <!-- @event:data="handlerMainLayerData" -->

      <AddressLayer
        v-show="isShow(1)"
        :form="shippingForm"
        @update:model="(data) => (shippingForm.state = data)"
        @submit:model="() => state.setShippingAddress(shippingForm.state)"
      />

      <AddressLayer
        v-show="isShow(2)"
        :form="billingForm"
        @update:model="(data) => (billingForm.state = data)"
        @submit:model="() => state.setBillingAddress(billingForm.state)"
      />

      <FinishLayer v-show="isShow(3)" />
    </div>
  </section>
</template>
