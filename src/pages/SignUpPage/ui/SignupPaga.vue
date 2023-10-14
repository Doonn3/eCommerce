<script lang="ts" setup>
import { StepLayer } from '@shared/ui-kit/Layout';
import { ref } from 'vue';
import InputField from '../components/InputField/InputField.vue';

const step = ref(0);
</script>
<template>
  <section class="sign-up">
    <step-layer
      :steps="['Data', 'Address', 'Finish']"
      class="w-full"
      @event:step="(data) => (step = data.index)"
    />
    <section>
      <template v-if="step === 0">
        <div class="space-y-2">
          <InputField name="Name" />
          <InputField name="Surname" />
          <InputField name="Email" />
          <InputField name="Password" />
        </div>
      </template>
      <template v-if="step === 1"> <h1 class="bg-slate-700">VEK</h1> </template>
      <template v-if="step === 2"> <h1 class="bg-orange-700">AHAH</h1> </template>
    </section>
  </section>
</template>
