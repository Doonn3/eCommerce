import { defineStore } from 'pinia';
import type { FacetResponse } from '../model/TermFacetResultType';
import { ref } from 'vue';
import { fetchProductManufacturers } from '../api/fetchProductManufacturers';

const NAME_SPACE = 'UseProductFilter';

const state = ref<FacetResponse | null>(null);

const requestManufacturers = async () => {
  const result = await fetchProductManufacturers('8ce96d24-0f50-44a6-9124-49bc51a2e80a');

  console.log(result.data.value?.facets['variants.attributes.manufacturer'].terms);

  state.value = result.data.value;
};

const GetManufacturersName = () => {
  return state.value?.facets['variants.attributes.manufacturer'].terms.map((_item) => {
    return { name: _item.term };
  });
};

export const useProductFilterStore = defineStore(NAME_SPACE, {
  state: () => {
    return { state };
  },
  getters: {
    GetManufacturersName
  },
  actions: {
    requestManufacturers
  }
});
