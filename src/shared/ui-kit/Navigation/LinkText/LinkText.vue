<script lang="ts" setup>
type PropsType = {
  linkTo: string;
  name: string;
};

const props = defineProps<PropsType>();
</script>
<template>
  <router-link
    :to="props.linkTo"
    class="link-info link"
    >{{ props.name }}
  </router-link>
</template>
