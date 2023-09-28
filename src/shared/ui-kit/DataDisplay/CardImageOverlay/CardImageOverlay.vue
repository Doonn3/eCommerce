<script lang="ts" setup>
type PropsType = {
  title: string;
  urlImg: string;
  descriptions: string;
};

const props = withDefaults(defineProps<Partial<PropsType>>(), {
  title: 'Shoes!',
  urlImg: '',
  descriptions: 'If a dog chews shoes whose shoes does he choose?'
});
</script>

<template>
  <div class="card image-full w-full bg-base-100 shadow-xl">
    <figure>
      <img
        :src="props.urlImg"
        :alt="props.title"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>{{ props.descriptions }}</p>
      <div class="card-actions justify-end">
        <slot>
          <button class="btn btn-primary">Buy Now</button>
        </slot>
      </div>
    </div>
  </div>
</template>
