import { computed, ref } from 'vue';

type OtioonsType = {
  min: number;
  max: number;
};

type PropsType = {
  step: number;
  options?: OtioonsType;
};

export function useSteps(props: PropsType) {
  const state = ref(props);

  const State = computed(() => {
    return state.value;
  });

  const setStep = (_value: number) => {
    if (state.value.options) {
      if (_value >= state.value.options.max) {
        state.value.step = state.value.options.max;
      } else if (_value <= state.value.options.min) {
        state.value.step = state.value.options.min;
      }
    }
    state.value.step = _value;
  };

  const prev = () => {
    state.value.step -= 1;
    if (state.value.options) {
      if (state.value.step <= state.value.options.min) {
        state.value.step = state.value.options.min;
      }
    }
  };

  const next = () => {
    state.value.step += 1;

    if (state.value.options) {
      if (state.value.step >= state.value.options.max) {
        state.value.step = state.value.options.max;
      }
    }
  };

  return { State, prev, next, setStep };
}
