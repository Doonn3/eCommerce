import type { StateType } from '../state/state';

export const GetCategories = (state: StateType) => {
  return state.categoryStack[state.categoryStack.length - 1];
};

export const IsEmptyCategoryStack = (state: StateType) => {
  return state.categoryStack.length > 1 ? true : false;
};
