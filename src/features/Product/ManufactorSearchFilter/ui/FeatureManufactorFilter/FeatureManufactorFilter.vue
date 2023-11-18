<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { SimpleForm } from '@shared/ui-kit/Layout';
import { useProductFilterStore } from '@entities/Product';

import CheckboxWithText, { type EmitType } from '../../components/CheckboxWithText.vue';
import { useFilter } from '../../models/useFilter';
import filterModel from '../../models/FilterModel';

const productFilter = useProductFilterStore();

const filter = useFilter();

onMounted(() => {
  const categoryId = useRoute().params.id;

  if (categoryId.length < 1 || categoryId === undefined) return;

  productFilter.requestManufacturers(categoryId as string);
});

const handlerInfo = (data: EmitType) => {
  if (data.checkStatus) {
    // filter.add(data.name);
    filterModel.add(data.name);
  } else {
    filterModel.deletionsByName(data.name);
    // filter.removeParam(data.name);
  }
  console.log(filterModel.Model());
};

const check = () => {
  return productFilter.GetManufacturersName === undefined || productFilter.GetManufacturersName.length < 1 ? false : true;
};
</script>

<template>
  <simple-form
    v-if="check()"
    name="Manufacturers"
  >
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
