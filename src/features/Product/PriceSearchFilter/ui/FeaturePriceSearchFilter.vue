<script lang="ts" setup>
import { SimpleForm } from '@shared/ui-kit/Layout';
import TextAndInput, { type EmitType } from '../components/TextAndInput.vue';

import { useFilter } from '../models/useFilter';

import model from '../models/PriceSearchModel';

const filter = useFilter();

const onInput = (data: EmitType) => {
  if (data.id === 'min') {
    model.setMin(data.value);
  } else {
    model.setMax(data.value);
  }
};
</script>

<template>
  <simple-form name="Price">
    <div class="flex w-full space-x-2">
      <TextAndInput
        id="min"
        place-holder="Min"
        :init-value="filter.GetState().min"
        @info="onInput"
      />
      <TextAndInput
        id="max"
        place-holder="Max"
        :init-value="filter.GetState().max"
        @info="onInput"
      />
    </div>
  </simple-form>
</template>
