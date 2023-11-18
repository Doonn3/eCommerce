<script lang="ts" setup>
import { useRouter } from 'vue-router';

import { DisplayCard } from '@shared/ui-kit/DataDisplay';
import { SimpleButton } from '@shared/ui-kit/Buttons';

type PropsType = {
  id: string;
  urlImg: string;
  title: string;
  descriptions: string;
  price: string;
};

const router = useRouter();

const props = defineProps<PropsType>();

const onClick = () => {
  router.push({ name: 'product-page', params: { id: props.id } });
};
</script>

<template>
  <display-card
    :url-img="props.urlImg"
    :title="props.title"
    :descriptions="props.descriptions"
    :price="props.price"
    @click="onClick"
  >
    <SimpleButton
      name="add to cart"
      :is-disabled="true"
      :options="{ colorStyle: 'btn-primary' }"
    />
  </display-card>
</template>
