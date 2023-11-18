import type { StateType } from '../state/state';
import { childsCategoryById } from '../lib/processingRawCategory';

export function selectCategoryById(state: StateType, id: string) {
  const result = childsCategoryById(state, id);
  if (result === null) return;

  const alreadyInStack = state.categoryStack.some((categories) => categories.length === result.length && categories.every((value, index) => value.id === result[index].id));

  if (!alreadyInStack) {
    state.categoryStack.push(result);
  }
}

export function prevCategory(state: StateType) {
  state.categoryStack.pop();
}
