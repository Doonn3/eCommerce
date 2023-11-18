import { fetchQueryCategories } from '../../api/fetchQueryCategories';
import { root } from '../lib/processingRawCategory';
import { type StateType } from '../state/state';

export async function requestAllCategories(state: StateType) {
  state.isLoading = true;
  const categories = await fetchQueryCategories();
  if (categories instanceof Error) {
    state.isLoading = false;
    return null;
  }

  state.categoriesRawData = categories;

  const rootCategories = root({ rawCategory: categories, state });
  state.categoryStack.push(rootCategories);

  state.isLoading = false;

  return categories;
}
