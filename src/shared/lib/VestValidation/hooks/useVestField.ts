import { computed, ref, watch } from 'vue';
import { type SuiteRunResult } from 'vest';

interface ICB<V, F extends string, G extends string> {
  (_val: V): SuiteRunResult<F, G>;
}

export function useVestField<V, F extends string, G extends string>(initValue: V, cb: ICB<V, F, G>) {
  const state = ref(initValue);
  const validateResult = ref<SuiteRunResult<F, G>>();

  watch(
    () => state.value,
    (_newValue) => {
      exevuteValidate(_newValue as V);
    }
  );

  const validationField = () => {
    exevuteValidate(state.value as V);
    return IsValid();
  };

  const exevuteValidate = (_val: V) => {
    const suite = cb(_val);
    validateResult.value = suite;
  };

  const GetResult = computed(() => {
    return validateResult.value;
  });

  const GetErrors = computed(() => {
    if (validateResult.value === undefined) return '';
    if (validateResult.value.errors[0] === undefined) return '';
    return validateResult.value.errors[0].message as string;
  });

  const IsValid = () => {
    return validateResult.value?.valid || false;
  };

  const Status = computed(() => {
    if (validateResult.value?.hasErrors()) return 'error';
    if (validateResult.value?.hasWarnings()) return 'warning';
    if (validateResult.value?.valid) return 'success';
    return 'warning';
  });

  return { GetResult, state, GetErrors, IsValid, Status, validationField };
}
