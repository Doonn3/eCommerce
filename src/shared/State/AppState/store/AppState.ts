import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import localStorageService from '@shared/lib/services/LocalStorageService';
import type { CurrencyCodeType, LangType, StateType } from '../common/StateType';
import { KEY_LOCAL_STORAGE, NAME_SPACE } from '../common/consts';
import { useTheme } from '../hooks/useTheme';

const loadState = localStorageService.load<StateType>(KEY_LOCAL_STORAGE);

export const useAppState = defineStore(NAME_SPACE, () => {
  const state = reactive<StateType>(
    loadState || { language: 'en', currencyCode: 'USD', theme: 'light' }
  );

  useTheme(state.theme);

  const changeLanguage = (lang: LangType) => {
    state.language = lang;
    localStorageService.save<StateType>(state, KEY_LOCAL_STORAGE);
  };

  const changeCurrencyCode = (code: CurrencyCodeType) => {
    state.currencyCode = code;
    localStorageService.save<StateType>(state, KEY_LOCAL_STORAGE);
  };

  const switchTheme = () => {
    switch (state.theme) {
      case 'light':
        state.theme = 'business';
        useTheme(state.theme);
        break;
      case 'business':
        state.theme = 'light';
        useTheme(state.theme);
        break;
    }

    localStorageService.save<StateType>(state, KEY_LOCAL_STORAGE);
  };

  const getState = computed(() => {
    return state;
  });

  return { getState, changeLanguage, changeCurrencyCode, switchTheme };
});
