import { useRoute, useRouter } from 'vue-router';

type URLParamsType = {
  price: {
    min: number;
    max: number;
  };
};

export function useFilter() {
  const router = useRouter();
  const route = useRoute();

  const init = (): URLParamsType => {
    const queryParams = route.query;
    if (queryParams.price === undefined) {
      return { price: { min: 0, max: 0 } };
    }
    // if (queryParams.price === undefined) {
    //   const result: URLParamsType<string[]> = { manufacturers: [] };
    //   return result;
    // }
    const params = (queryParams.price as string).split('-');
    return { price: { min: Number(params[0]), max: Number(params[1]) } };
  };

  const state = init();

  const GetState = () => {
    return state.price;
  };

  const add = (options: { min?: number; max?: number }) => {
    const { min, max } = options;
    if (min !== undefined) {
      state.price.min = min;
    }
    if (max !== undefined) {
      state.price.max = max;
    }

    const str = `${state.price.min}-${state.price.max}`;
    // if (state.manufacturers.includes(val)) return;
    // state.manufacturers.push(val);
    // const params = JSON.stringify(state.manufacturers);
    // const query: URLParamsType<string> = {
    //   manufacturers: params
    // };
    const saveQuery = route.query;

    router.push({
      name: route.name?.toString(),
      query: { ...saveQuery, price: str }
    });
  };

  const removeParam = (val: string) => {
    // const manufacturers = state.manufacturers;
    // if (manufacturers.includes(val)) {
    //   const index = manufacturers.indexOf(val);
    //   manufacturers.splice(index, 1);
    //   const params = JSON.stringify(manufacturers);
    //   const query: URLParamsType<string> = {
    //     manufacturers: params
    //   };
    //   router.push({ name: route.name?.toString(), query });
    // }
    // if (manufacturers.length < 1) {
    //   router.push({ name: route.name?.toString(), query: {} });
    // }
  };

  const clear = () => {
    // state.manufacturers = [];
  };

  return { add, clear, removeParam, GetState };
}
