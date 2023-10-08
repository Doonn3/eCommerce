import { ref, watch, type Ref } from 'vue';
import { useAuthState } from '../../../State/ClientState/index';

type MethodType = 'GET' | 'POST' | 'DELETE';

type HeadersType = { [key in string]: string };

type BodyType = string;

type OptionsType = {
  method?: MethodType;
  headers?: HeadersType;
  body?: BodyType;
};

type MessageType = {
  message: string;
};

type RefDataType<T> = Ref<T>;

export function useFetch<T>(url: string, options?: OptionsType, successMessage?: string) {
  const authState = useAuthState();
  const data = ref<RefDataType<T> | null>(null);
  const isLoading = ref(true);
  const isError = ref(false);
  const message = ref('');

  const fetchData = async () => {
    const state = authState.getState; // INTERCEPTOR
    if (state === null) {
      // INTERCEPTOR
      throw Error('ACCESS_TOKEN = NULL'); // INTERCEPTOR
    } // INTERCEPTOR

    const option: OptionsType = {
      headers: {
        Authorization: `Bearer ${state.access_token}`, // INTERCEPTOR
        ...options?.headers
      }
    };

    isLoading.value = true;
    try {
      const res = await fetch(url, option);

      if (!res.ok) {
        const result = (await res.json()) as MessageType;
        isError.value = true;
        message.value = result.message;
      }

      data.value = (await res.json()) as T;
      isError.value = false;
    } catch (error) {
      isError.value = true;
      message.value = (error as Error).message;
      isLoading.value = false;
    } finally {
      isLoading.value = false;
      message.value = successMessage || 'success';
    }
  };

  return { isLoading, isError, message, data, fetchData };
}
