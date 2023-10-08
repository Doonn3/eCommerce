import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useAppState } from '@shared/State/AppState';
import { type CategoryPagedQueryResponseType } from '../model/CategoryPagedQueryResponseType';
import { fetchQueryCategories } from '../api/fetchQueryCategories';
import { useRouter } from 'vue-router';

const NAME_SPACE = 'useCategoryStore';

type SelectCategoryType = {
  root: { name: string };
  childs: { id: string; name: string }[];
};

export const useCategoryStore = defineStore(NAME_SPACE, () => {
  const router = useRouter();
  const appState = useAppState();
  const data = ref<CategoryPagedQueryResponseType | null>(null);
  const isLoading = ref(true);

  const IsLoading = computed(() => isLoading.value);

  // bread-crumbs
  const selectedGategoryList = ref<SelectCategoryType>({
    root: { name: 'Categories' },
    childs: []
  });

  const GetRootCategories = computed(
    () =>
      data.value?.results
        .filter((_category) => _category.parent === undefined)
        .map((_category) => {
          return { name: _category.name[appState.getState.language], id: _category.id };
        })
  );

  const tempID = router.currentRoute.value.params.id as string;
  GetCategoriesById(tempID);
  console.log(tempID, 'TEMP');

  function GetCategoriesById(id: string) {
    console.log(id);
    router.push({ name: 'catalog', params: { id: id } });

    const sub = data.value?.results
      .filter((_category) => _category.parent?.id === id)
      .map((_category) => {
        return { id: _category.id, name: _category.name[appState.getState.language] };
      });
    return sub === undefined ? null : sub;
  }

  // bread-crumbs
  const GetSelectCategories = computed(() => {
    return selectedGategoryList.value;
  });

  // bread-crumbs
  function AddRouteCategory(id: string) {
    const findDublicate = selectedGategoryList.value.childs.find(
      (_category) => _category.id === id
    );

    if (findDublicate) return;

    const find = data.value?.results.find((_category) => _category.id === id);

    if (find) {
      selectedGategoryList.value.childs.push({
        id: find.id,
        name: find.name[appState.getState.language]
      });
    }
  }

  async function requestAllCategories() {
    const categories = await fetchQueryCategories();
    if (categories === null) return null;

    data.value = categories.data.value;
    isLoading.value = categories.isLoading.value;

    return categories;
  }

  return {
    requestAllCategories,
    IsLoading,
    GetRootCategories,
    GetCategoriesById,
    GetSelectCategories,
    AddRouteCategory
  };
});
