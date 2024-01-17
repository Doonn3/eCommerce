<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { TableData } from '@shared/ui-kit/DataDisplay';
import { useCustomer } from '@entities/Customer';

import { useState } from '../../model/statePage';

const state = useState();

const customer = useCustomer();

const unwrapObject = (data: object | null) => {
  if (data === null) return [];
  const result = Object.values(data);

  return result.map<string>((item) => item);
};
</script>
<template>
  <section class="flex h-full w-full flex-col items-center justify-evenly">
    <div class="w-full space-y-2 border-b-2 border-accent">
      <span class="text-xl text-accent">Main Data</span>

      <TableData
        :name-columns="['Name', 'Surname', 'Email', 'Password', 'Date of Birth']"
        :data="unwrapObject(state.getMainData())"
      />
    </div>

    <div class="w-full space-y-2 border-b-2 border-accent">
      <span class="text-xl text-accent">Shipping Adress</span>
      <TableData
        :name-columns="['Country', 'City', 'Street', 'Default Shipping']"
        :data="unwrapObject(state.getShippingAddress())"
      />
    </div>

    <div class="w-full space-y-2 border-b-2 border-accent">
      <span class="text-xl text-accent">Billing Adress</span>
      <TableData
        :name-columns="['Country', 'City', 'Street', 'Default Billing']"
        :data="unwrapObject(state.getBillingAddress())"
      />
    </div>

    <div class="space-x-10">
      <SimpleButton
        name="Back"
        :options="{ colorStyle: 'btn-primary' }"
      />
      <SimpleButton
        :is-loading="customer.IsLoading"
        name="Submit"
        :options="{ colorStyle: 'btn-primary' }"
        @click="() => state.submit()"
      />
    </div>
  </section>
</template>
