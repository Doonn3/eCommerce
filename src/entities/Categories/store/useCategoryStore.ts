import { defineStore } from 'pinia';
import { state } from './state/state';
import { requestAllCategories } from './actions/requestAllCategories';
import { selectCategoryById, prevCategory } from './actions/selectCategoryById';
import { GetCategories, IsEmptyCategoryStack } from './getters/getCategories';
import { useRouter } from 'vue-router';

const NAME_SPACE = 'useCategoryStore';

export const useCategoryStore = defineStore(NAME_SPACE, {
  state() {
    return {
      router: useRouter(),
      ...state()
    };
  },
  getters: {
    GetCategories,
    IsEmptyCategoryStack
  },
  actions: {
    RequestAllCategories() {
      return requestAllCategories(this);
    },
    SelectCategoryById(id: string) {
      return selectCategoryById(this, id);
    },
    PrevCategory() {
      return prevCategory(this);
    }
  }
});
