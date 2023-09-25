import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { Token, TokenType } from '../../../api/refactor/model/Token';
import LocalStorageService from '../../../lib/services/LocalStorageService';

const NAME_SPACE = 'useAuthState';
const LOCAL_STORAGE_KEY = 'token';

const load = LocalStorageService.load<TokenType>(LOCAL_STORAGE_KEY);

export const useAuthState = defineStore(NAME_SPACE, () => {
  const state = ref<Token | null>(load === null ? null : new Token(load));

  const setToken = (_token: Token) => {
    state.value = _token;
    LocalStorageService.save<TokenType>(_token.Data, LOCAL_STORAGE_KEY);
  };

  const removeToken = () => {
    state.value = null;
    LocalStorageService.remove(LOCAL_STORAGE_KEY);
  };

  const getState = computed(() => {
    if (state.value === null) return null;
    return state.value.Data;
  });

  return { getState, setToken, removeToken };
});
