import { defineStore } from 'pinia';
import { state } from './state/state';
import { requestAllCategories } from './actions/requestAllCategories';
import { selectCategoryById } from './actions/selectCategoryById';
import { GetCategories } from './getters/getCategories';
import { useAppState } from '../../../shared/State/AppState';

const NAME_SPACE = 'useCategoryStore';

export const useCategoryStore = defineStore(NAME_SPACE, {
  state() {
    return {
      appState: useAppState(),
      ...state()
    };
  },
  getters: {
    GetCategories
  },
  actions: {
    RequestAllCategories() {
      return requestAllCategories(this);
    },
    SelectCategoryById(id: string) {
      return selectCategoryById(this, id);
    }
  }
});
