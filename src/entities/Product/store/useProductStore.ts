import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useAppState } from '@shared/State/AppState';

import { fetchGetProductProjectionByID, fetchProductProjectionSearch, fetchQueryProductProjections, fetchQueryProductProjectionsByCategory } from '../api/fetchProduct';

import type { ProductProjectionPagedQueryResponseType, ProductProjectionType } from '../types/ProductType';
import { findPriceInCurrency } from '../lib/helpers';

const NAME_SPACE = 'UseProductStore';

export const useProductStore = defineStore(NAME_SPACE, () => {
  // State
  const appState = useAppState();
  const data = ref<ProductProjectionPagedQueryResponseType | null>(null);
  const product = ref<ProductProjectionType | null>(null);
  const isLoading = ref(false);
  // << State

  // Getters
  const IsLoading = computed(() => isLoading.value);

  const Data = computed(() => data.value);

  const GetProduct = computed(() => {
    if (product.value === null) return null;

    const findPriceData = findPriceInCurrency(product.value.masterVariant.prices, appState.getState.currencyCode);

    const result = {
      id: product.value.id,
      name: product.value.name[appState.getState.language],
      descriptions: product.value.description ? product.value.description[appState.getState.language] : '',
      urlImages: product.value.masterVariant.images?.map((img) => img.url),
      priceData: {
        price: findPriceData?.price,
        currency: findPriceData?.currency
      }
    };

    return result;
  });

  const GetProducts = computed(() => {
    if (data.value) {
      return data.value.results.map((product) => {
        const id = product.id;
        const name = product.name[appState.getState.language];
        const description = product.description ? product.description[appState.getState.language] : '';
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
    isLoading.value = true;
    const products = await fetchQueryProductProjections(limit, offset * limit);

    if (products instanceof Error) return;

    data.value = products;
    isLoading.value = false;
  }

  //offset = 0, limit = 10
  async function requestGetProductsByCategory(id: string) {
    isLoading.value = true;
    const products = await fetchQueryProductProjectionsByCategory(id).finally(() => (isLoading.value = false));

    if (products instanceof Error) return;

    data.value = products;
  }

  async function requestGetProductById(id: string) {
    isLoading.value = true;
    const res = await fetchGetProductProjectionByID(id).finally(() => (isLoading.value = false));

    if (res instanceof Error) return;

    product.value = res;
  }

  async function requestProductSearch(searchText: string) {
    isLoading.value = true;

    const res = await fetchProductProjectionSearch(appState.getState.language, searchText).finally(() => (isLoading.value = false));

    if (res instanceof Error) return;

    data.value = res;
  }

  function setData(_data: ProductProjectionPagedQueryResponseType) {
    data.value = _data;
  }
  // << Actions

  return {
    requestGetProducts,
    Data,
    GetProducts,
    IsLoading,
    GetTotalPaginationNumber,
    requestGetProductsByCategory,
    requestGetProductById,
    GetProduct,
    requestProductSearch,
    setData
  };
});
