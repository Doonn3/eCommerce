<script lang="ts" setup>
import { CenteredHero } from '@shared/ui-kit/Layout';
import { LinkText } from '@shared/ui-kit/Navigation';
</script>
<template>
  <centered-hero
    title="In Developing Page"
    paragraph=""
  >
    <LinkText
      link-to="/catalog"
      name="Back to catalog"
    />
  </centered-hero>
</template>
