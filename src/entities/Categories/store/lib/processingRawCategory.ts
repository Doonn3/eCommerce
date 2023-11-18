import type { CategoryPagedQueryResponseType } from '../../types/CategoryPagedQueryResponseType';
import type { CategoryType, StateType } from '../state/state';

type OptionsType = {
  rawCategory: CategoryPagedQueryResponseType;
  state: StateType;
};

export function root(options: OptionsType) {
  const { rawCategory, state } = options;
  const result = rawCategory.results.filter((category) => category.parent?.id === undefined);

  const map = result.map<CategoryType>((category) => {
    return { id: category.id, name: category.name[state.stateApp.getState.language] };
  });

  return map;
}

export function childsCategoryById(state: StateType, id: string) {
  const rawCategory = state.categoriesRawData?.results;
  if (rawCategory === undefined) return null;

  const result = rawCategory.filter((category) => category.parent?.id === id);

  const find = searchParentById(state, id);

  if (find === null) return null;

  const map = result.map<CategoryType>((category) => {
    return { id: category.id, name: category.name[state.stateApp.getState.language] };
  });

  if (map.length < 1) return null;

  const newArr = [find, ...map];
  return newArr;
}

function searchParentById(state: StateType, id: string) {
  const rawCategory = state.categoriesRawData?.results;
  if (rawCategory === undefined) return null;
  const find = rawCategory.find((category) => category.id === id);
  if (find) {
    const parent: CategoryType = { id: find.id, name: find.name[state.stateApp.getState.language] };
    return parent;
  }
  return null;
}
