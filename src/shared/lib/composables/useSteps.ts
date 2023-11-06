import { computed, ref } from 'vue';

export function useSteps() {
  const data = ref(0);

  const Data = computed(() => {
    return data.value;
  });

  const setStep = (_value: number) => {
    data.value = _value;
  };

  const prev = () => {
    data.value -= 1;
    if (data.value < 0) data.value = 0;
  };

  const next = () => {
    data.value += 1;
  };

  return { Data, prev, next, setStep };
}
