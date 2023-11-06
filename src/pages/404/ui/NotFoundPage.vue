<script lang="ts" setup>
import { CenteredHero } from '@shared/ui-kit/Layout';
import { LinkText } from '@shared/ui-kit/Navigation';
</script>

<template>
  <centered-hero
    title="404 not found page"
    paragraph=""
  >
    <LinkText
      link-to="/home"
      name="Back to home"
    />
  </centered-hero>
</template>
