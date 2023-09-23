import { computed, ref } from 'vue';

export function useSwitch(init: boolean) {
  const state = ref(init);

  const on = () => {
    state.value = true;
  };

  const off = () => {
    state.value = false;
  };

  const onSwitch = () => {
    state.value = !state.value;
  };

  const getState = computed(() => {
    return state.value;
  });

  return { on, off, onSwitch, getState };
}
