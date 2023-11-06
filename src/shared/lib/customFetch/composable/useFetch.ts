import { ref, type UnwrapRef } from 'vue';
import { customFetch } from '../model/fetchMod';

type OptionsType = {
  url: string;
  request?: RequestInit;
};

export async function useFetch<T>(options: OptionsType) {
  const { url, request } = options;

  const data = ref<T | null>(null);
  const isError = ref(false);
  const isLoading = ref(true);

  try {
    const res = await customFetch({
      input: url,
      init: request
    });

    if (res.ok) {
      const result = (await res.json()) as UnwrapRef<T>;
      data.value = result;
    } else {
      isError.value = true;
      isLoading.value = false;
    }
  } catch (error) {
    isError.value = true;
    isLoading.value = false;
  } finally {
    isLoading.value = false;
  }

  return { data, isError, isLoading };
}
