<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { useCustomer } from '@entities/Customer';
import { useState } from '../../model/statePage';

const state = useState();

const customer = useCustomer();
</script>
<template>
  <div>
    <SimpleButton
      name="Back"
      @click="() => state.prev()"
    />
    <SimpleButton
      :is-loading="customer.IsLoading"
      name="Submit"
      @click="() => state.submit()"
    />
  </div>
</template>
