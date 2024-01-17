<script lang="ts" setup>
import { SimpleButton } from '@shared/ui-kit/Buttons';
import { LinkText } from '@shared/ui-kit/Navigation';

type PropsType = {
  hideControl?: 'back' | 'next';
  onBack?: () => void;
  onNext?: () => void;
};

const props = defineProps<PropsType>();
</script>
<template>
  <div class="flex flex-col space-y-10">
    <div class="mx-auto mt-5 space-x-10">
      <SimpleButton
        v-if="props.hideControl === 'back' ? false : true"
        name="Back"
        :options="{ colorStyle: 'btn-primary' }"
        @click="props.onBack"
      />
      <SimpleButton
        v-if="props.hideControl === 'next' ? false : true"
        name="Next"
        :options="{ colorStyle: 'btn-primary' }"
        @click="props.onNext"
      />
    </div>

    <div class="flex w-full justify-around">
      <LinkText
        link-to="/catalog"
        name="Back to catalog"
      />
      <LinkText
        link-to="/login"
        name="login"
      />
    </div>
  </div>
</template>
