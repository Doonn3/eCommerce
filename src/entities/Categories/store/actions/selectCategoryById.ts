import type { StateType } from '../state/state';
import { useAppState } from '../../../../shared/State/AppState';

export function selectCategoryById(state: StateType, id: string) {
  const find = state.data.find((_category) => {
    if (_category.id === id) {
      return _category;
    } else {
      return _category.childs.find((_child) => _child.id === id);
    }
  });

  if (find === undefined) return;

  const parent = { id: find.id, name: find.name[useAppState().getState.language] };

  const childs = find.childs.map((_item) => {
    return { id: _item.id, name: _item.name[useAppState().getState.language] };
  });

  state.showCategory = [parent, ...childs];
}
