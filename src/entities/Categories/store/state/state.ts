import type { LocalizedString } from '../../../../shared/api/common/CommonType';

export type ShowCategoryType = {
  id: string;
  name: string;
};

export type NewCategoryType = {
  id: string;
  name: LocalizedString;
  childs: {
    id: string;
    name: LocalizedString;
  }[];
};

export type StateType = {
  isLoading: boolean;
  data: NewCategoryType[];
  showCategory: ShowCategoryType[];
};

export const state = (): StateType => ({
  isLoading: true,
  data: [],
  showCategory: []
});
