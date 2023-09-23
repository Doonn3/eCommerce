<script lang="ts" setup>
import { IconIndicator } from '@shared/ui-kit/Navigation';
import MobileNav from '../components/MobileNav.vue';
</script>

<template>
  <div class="navbar bg-base-300">
    <div class="navbar-start">
      <ul class="menu menu-horizontal hidden bg-base-100 p-2 px-1 md:flex">
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/catalog">Catalog</router-link>
        </li>
        <li>
          <router-link to="/about">About Us</router-link>
        </li>
      </ul>

      <MobileNav class="md:hidden" />
    </div>
    <div class="navbar-center">
      <router-link
        to="/home"
        class="btn btn-ghost text-xl normal-case"
        >Shoperz</router-link
      >
    </div>
    <div class="navbar-end">
      <button class="btn btn-circle btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <IconIndicator />
    </div>
  </div>
</template>
