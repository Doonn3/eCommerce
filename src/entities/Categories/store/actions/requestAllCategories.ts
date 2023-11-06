import { useAppState } from '../../../../shared/State/AppState';
import { fetchQueryCategories } from '../../api/fetchQueryCategories';
import type { CategoryPagedQueryResponseType } from '../../types/CategoryPagedQueryResponseType';
import type { NewCategoryType, StateType } from '../state/state';

export async function requestAllCategories(state: StateType) {
  const categories = await fetchQueryCategories();
  if (categories === null) return null;

  state.data = build(categories.data.value);

  state.showCategory = state.data.map((_category) => {
    return { id: _category.id, name: _category.name[useAppState().getState.language] };
  });

  // InitBuildCategoryList();
  state.isLoading = categories.isLoading.value;

  return categories;
}

function build(categoryPaged: CategoryPagedQueryResponseType | null) {
  if (categoryPaged === null) return [];
  const categories = categoryPaged.results;

  const parentFilter = categories.filter((_item) => _item.parent === undefined);

  const result = parentFilter.map<NewCategoryType>((_category) => {
    const childs = categories
      .filter((_item) => _item.parent?.id === _category.id)
      .map((_item) => {
        return { id: _item.id, name: _item.name };
      });

    return { id: _category.id, name: _category.name, childs: childs };
  });

  return result;
}
