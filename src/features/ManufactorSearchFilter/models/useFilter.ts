import { useRoute, useRouter } from 'vue-router';

type URLParamsType<T> = {
  manufacturers: T;
};

export function useFilter() {
  const router = useRouter();
  const route = useRoute();

  const init = (): URLParamsType<string[]> => {
    const queryParams = route.query as URLParamsType<string>;

    if (queryParams.manufacturers === undefined) {
      const result: URLParamsType<string[]> = { manufacturers: [] };
      return result;
    }
    const params = JSON.parse(queryParams.manufacturers as string) as string[];
    return { manufacturers: params };
  };

  const state = init();

  const add = (val: string) => {
    if (state.manufacturers.includes(val)) return;
    state.manufacturers.push(val);
    const params = JSON.stringify(state.manufacturers);

    const saveQuery = route.query;
    const query: URLParamsType<string> = {
      ...saveQuery,
      manufacturers: params
    };
    router.push({ name: route.name?.toString(), query });
  };

  const removeParam = (val: string) => {
    const manufacturers = state.manufacturers;
    if (manufacturers.includes(val)) {
      const index = manufacturers.indexOf(val);
      manufacturers.splice(index, 1);
      const params = JSON.stringify(manufacturers);
      const query: URLParamsType<string> = {
        manufacturers: params
      };
      router.push({ name: route.name?.toString(), query });
    }

    if (manufacturers.length < 1) {
      router.push({ name: route.name?.toString(), query: {} });
    }
  };

  const clear = () => {
    state.manufacturers = [];
  };

  const isCheckState = (checkVal: string) => {
    if (state.manufacturers.includes(checkVal)) return true;
    return false;
  };

  return { add, clear, removeParam, isCheckState };
}
