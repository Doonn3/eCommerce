<script lang="ts" setup>
import { SimpleForm } from '@shared/ui-kit/Layout';
import TextAndInput, { type EmitType } from '../components/TextAndInput.vue';

import { useFilter } from '../models/useFilter';

const filter = useFilter();

const onInput = (data: EmitType) => {
  if (data.name === 'Min') {
    filter.add({ min: data.value });
  } else {
    filter.add({ max: data.value });
  }
};
</script>

<template>
  <simple-form name="Price">
    <div class="flex w-full space-x-2">
      <TextAndInput
        name="Min"
        place-holder="Min"
        :init-value="filter.GetState().min"
        @info="onInput"
      />
      <TextAndInput
        name="Max"
        place-holder="Max"
        :init-value="filter.GetState().max"
        @info="onInput"
      />
    </div>
  </simple-form>
</template>
