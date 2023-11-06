import type { SuiteRunResult } from 'vest';
import { computed, reactive, watch, ref } from 'vue';

type TObjectType = {
  [key: string]: any;
};

type ICB<T> = {
  (formData: T, nameField?: keyof T): SuiteRunResult<string, string>;
};

export function useVestForm<T extends TObjectType>(init: T, validation: ICB<T>) {
  const state = reactive(init);

  const validateResult = ref<SuiteRunResult<string, string>>();

  for (const key in init) {
    watch(
      () => state[key],
      () => {
        validate(state, key);
      }
    );
  }

  const validate = (formData: T, nameField?: keyof T) => {
    const result = validation(formData, nameField);
    validateResult.value = result;
  };

  // validate(state);

  const GetError = (nameField: keyof typeof init) => {
    if (validateResult.value === undefined) return '';
    return validateResult.value.getError(nameField.toString()) as string;
  };

  const Valid = () => {
    validate(state);
    return validateResult.value?.valid;
  };

  const GetWarning = (nameField: keyof typeof init) => {
    if (validateResult.value === undefined) return '';
    return validateResult.value.getWarning(nameField.toString()) as string;
  };

  const StatusText = (nameField: keyof typeof init) => {
    const warn = validateResult.value?.getWarning(nameField.toString());
    const err = validateResult.value?.getError(nameField.toString());
    if (err) return 'error';
    if (warn) return 'warning';
    if (validateResult.value?.isValid(nameField.toString())) return 'success';
    return 'default';
  };

  const Result = computed(() => {
    return validateResult.value;
  });

  return { state, Result, GetError, GetWarning, StatusText, Valid };
}

export type VestFormType<T extends TObjectType> = ReturnType<typeof useVestForm<T>>;
