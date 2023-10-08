<script lang="ts" setup>
import { BreadCrumbs } from '@shared/ui-kit/Navigation';
import { useCategoryStore } from '../store/useCategoryStore';

const categoryStore = useCategoryStore();
</script>

<template>
  <bread-crumbs>
    <ul>
      <li>
        <router-link to="/catalog">{{ categoryStore.GetSelectCategories.root.name }}</router-link>
      </li>

      <li
        v-for="(item, index) in categoryStore.GetSelectCategories.childs"
        :key="index"
        :datatype="item.id"
      >
        <a>{{ item.name }}</a>
      </li>

      <!-- <li>Add Document</li> -->
    </ul>
  </bread-crumbs>
</template>
