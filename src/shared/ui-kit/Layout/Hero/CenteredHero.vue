<script lang="ts" setup>
type PropsType = {
  title: string;
  paragraph: string;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  title: 'Hello there',
  paragraph: `Provident cupiditate voluptatem et in. Quaerat fugiat ut
  assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.`
});
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ props.title }}</h1>
        <p class="py-6">
          {{ props.paragraph }}
        </p>
        <slot>
          <button class="btn btn-primary">Get Started</button>
        </slot>
      </div>
    </div>
  </div>
</template>
