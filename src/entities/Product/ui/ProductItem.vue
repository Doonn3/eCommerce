<script lang="ts" setup>
import { CardImageOverlay, type PropsCardImageOverlayType } from '@shared/ui-kit/DataDisplay';

const props = defineProps<Partial<PropsCardImageOverlayType>>();
</script>

<template>
  <card-image-overlay
    :descriptions="props.descriptions"
    :title="props.title"
    :url-img="props.urlImg"
  ></card-image-overlay>
</template>
