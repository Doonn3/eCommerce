import type { StateType } from '../state/state';

export const GetCategories = (state: StateType) => {
  return state.showCategory;
};
