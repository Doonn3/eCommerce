import { useAppState } from '@shared/State/AppState';
import type { CategoryPagedQueryResponseType } from '../../types/CategoryPagedQueryResponseType';

export type CategoryType = {
  id: string;
  name: string;
};

export type StateType = {
  stateApp: ReturnType<typeof useAppState>;
  isLoading: boolean;
  categoriesRawData: CategoryPagedQueryResponseType | null;
  categoryStack: CategoryType[][];
};

export const state = (): StateType => ({
  stateApp: useAppState(),
  isLoading: true,
  categoriesRawData: null,
  categoryStack: []
});
