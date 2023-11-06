import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { useLocalStorage } from '@shared/lib/composables';
import type { CurrencyCodeType, LangType, StateType } from '../common/StateType';
import { KEY_LOCAL_STORAGE, NAME_SPACE } from '../common/consts';
import { useTheme } from '../hooks/useTheme';

export const useAppState = defineStore(NAME_SPACE, () => {
  const localStorage = useLocalStorage();
  const loadState = localStorage.load<StateType>(KEY_LOCAL_STORAGE);

  const state = reactive<StateType>(loadState || { language: 'en', currencyCode: 'USD', theme: 'business' });

  const theme = useTheme();
  theme.switchTheme(state.theme);

  const changeLanguage = (lang: LangType) => {
    state.language = lang;
    localStorage.set<StateType>(KEY_LOCAL_STORAGE, state);
  };

  const changeCurrencyCode = (code: CurrencyCodeType) => {
    state.currencyCode = code;
    localStorage.set<StateType>(KEY_LOCAL_STORAGE, state);
  };

  const switchTheme = () => {
    switch (state.theme) {
      case 'light':
        state.theme = 'business';
        theme.switchTheme(state.theme);
        break;
      case 'business':
        state.theme = 'light';
        theme.switchTheme(state.theme);
        break;
    }

    localStorage.set<StateType>(KEY_LOCAL_STORAGE, state);
  };

  const getState = computed(() => {
    return state;
  });

  return { getState, changeLanguage, changeCurrencyCode, switchTheme };
});
