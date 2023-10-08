<script lang="ts" setup>
import { SimpleForm } from '@shared/ui-kit/Layout';
import { useProductFilterStore } from '@entities/Product';
import CheckboxWithText, { type EmitType } from '../../components/CheckboxWithText.vue';
import { useFilter } from '../../models/useFilter';

const productFilter = useProductFilterStore();
const filter = useFilter();

const handlerInfo = (data: EmitType) => {
  if (data.checkStatus) {
    filter.add(data.name);
  } else {
    filter.removeParam(data.name);
  }
};
</script>

<template>
  <simple-form name="Manufacturers">
    <div class="space-y-3">
      <CheckboxWithText
        v-for="(manufacturer, index) in productFilter.GetManufacturersName"
        :key="index"
        :name="manufacturer.name"
        :init-state="filter.isCheckState(manufacturer.name)"
        @change-info="handlerInfo"
      />
    </div>
  </simple-form>
</template>
../../models/config
