import { defineStore } from 'pinia';
import type { FacetResponse } from '../types/TermFacetResultType';
import { computed, ref } from 'vue';
import { fetchProductManufacturers } from '../api/fetchProductManufacturers';
import { useRoute, useRouter } from 'vue-router';
import type { OptionsFilterType } from '../types/OptionsFilterType';
import { fetchProductProjectionQueryFilterSearch } from '../api/fetchProduct';
import { useAppState } from '../../../shared/State/AppState';
import { useProductStore } from './useProductStore';

const NAME_SPACE = 'UseProductFilter';

export const useProductFilterStore = defineStore(NAME_SPACE, () => {
  const producStore = useProductStore();
  const appState = useAppState();
  const state = ref<FacetResponse | null>(null);
  const router = useRouter();
  const route = useRoute();

  const GetManufacturersName = computed(() => {
    const terms = state.value?.facets['variants.attributes.manufacturer'].terms;
    return terms?.map((_item) => {
      return { name: _item.term };
    });
  });

  async function requestManufacturers(categoriId: string) {
    const result = await fetchProductManufacturers(categoriId);
    // const result = await fetchProductManufacturers('8ce96d24-0f50-44a6-9124-49bc51a2e80a');

    if (result instanceof Error) return;

    state.value = result;
  }

  function reset() {
    state.value = null;
  }

  async function filter(filter: OptionsFilterType) {
    const res = await fetchProductProjectionQueryFilterSearch({
      categoryId: route.params.id as string,
      manufacturer: filter.manufacturer
    });

    if (res instanceof Error) return;

    console.log(res);

    producStore.setData(res);

    const queryManufacture = JSON.stringify(filter.manufacturer);
    const queryPrice = `${filter.price?.min}-${filter.price?.max}`;

    const query = {
      ...(queryManufacture ? { manufacturer: queryManufacture } : {}),
      price: queryPrice
    };

    router.push({
      name: route.name?.toString(),
      params: { category: 'category', id: route.params.id },
      query
    });
  }

  return { GetManufacturersName, requestManufacturers, reset, filter };
});
