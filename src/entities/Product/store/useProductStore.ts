import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useAppState } from '@shared/State/AppState';

import {
  fetchQueryProductProjections,
  fetchQueryProductProjectionsByCategory
} from '../api/fetchProduct';

import type { ProductProjectionPagedQueryResponseType } from '../model/ProductType';

const NAME_SPACE = 'UseProductStore';

export const useProductStore = defineStore(NAME_SPACE, () => {
  // State
  const appState = useAppState();
  const data = ref<ProductProjectionPagedQueryResponseType | null>(null);
  const isLoading = ref(true);
  // << State

  // Getters
  const IsLoading = computed(() => isLoading.value);

  const Data = computed(() => data.value);

  const GetProducts = computed(() => {
    if (data.value) {
      return data.value.results.map((product) => {
        const id = product.id;
        const name = product.name[appState.getState.language];
        const description = product.description
          ? product.description[appState.getState.language]
          : '';
        const urlImage = product.masterVariant.images ? product.masterVariant.images[0].url : ''; // Берем первый попавшийся Image
        const findCurrencyPrice = product.masterVariant.prices?.find((_price) => {
          if (_price.value.currencyCode === appState.getState.currencyCode) {
            return _price.value;
          }
          return null;
        });
        let symbolCurrency = '$';
        let price = '';
        if (findCurrencyPrice) {
          if (findCurrencyPrice.value.currencyCode === 'RUB') symbolCurrency = 'P';
          if (findCurrencyPrice.value.currencyCode === 'EUR') symbolCurrency = 'Э';
          price = `${symbolCurrency} ${findCurrencyPrice.value.centAmount / 100}`;
        }
        return {
          id,
          name,
          description,
          urlImage,
          price
        };
      });
    }
    return null;
  });

  const GetTotalPaginationNumber = computed(() => {
    if (data.value === null) return 0;
    return Math.ceil(data.value.total / data.value.limit);
  });
  // << Getters

  // Actions
  async function requestGetProducts(offset = 0, limit = 10) {
    if (offset <= 0) offset = 0;
    const products = await fetchQueryProductProjections(limit, offset * limit);
    if (products === null) return null;
    data.value = products.data.value;
    isLoading.value = products.isLoading.value;
    return products;
  }

  async function requestGetProductsByCategory(id: string, offset = 0, limit = 10) {
    const products = await fetchQueryProductProjectionsByCategory(id);
    if (products === null) return null;
    data.value = products.data.value;
    isLoading.value = products.isLoading.value;
    return products;
  }
  // << Actions

  return {
    requestGetProducts,
    Data,
    GetProducts,
    IsLoading,
    GetTotalPaginationNumber,
    requestGetProductsByCategory
  };
});
