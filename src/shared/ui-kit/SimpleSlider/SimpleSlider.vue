<template>
  <div class="mt-10">
    <div class="relative cursor-pointer">
      <div class="relative mx-auto h-3/4 w-3/4 overflow-hidden">
        <img
          @click="imagesSwitch"
          :src="currentImage"
          alt="Main Image"
          class="mx-auto cursor-pointer transition duration-500 ease-in-out"
          :class="currentImageClasses"
        />
      </div>
    </div>
    <div class="mx-auto mt-10 flex w-11/12 gap-2 overflow-auto pb-3">
      <img
        v-for="(image, index) in props.imagesSrc"
        :key="index"
        :src="image"
        alt="Thumbnail Image"
        class="w-1/4 cursor-pointer divide-solid border-2 border-transparent"
        @click="getImage(index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type PropsType = {
  imagesSrc: string[];
};
const props = withDefaults(defineProps<PropsType>(), {
  imagesSrc: () => ['']
});

const currenIndexImg = ref<number>(0);
const currentImage = ref<string>(props.imagesSrc[0]);
const currentImageClasses = ref<string>('');
let isDisable = false;

const emit = defineEmits(['event:click']);

const imagesSwitch = (e: MouseEvent) => {
  if (isDisable) return;
  const imageElement = e.target as HTMLDivElement;
  const widthElement = imageElement.offsetWidth;
  const rect = imageElement.getBoundingClientRect(); // Получаем размеры и позицию элемента
  const x = e.clientX - rect.left; // Горизонтальная координата клика относительно элемента

  if (widthElement / 3 > x) {
    getPrevImage();
  } else if ((widthElement * 2) / 3 > x) {
    emit('event:click');
  } else {
    getNextImage();
  }
};

const getPrevImage = () => {
  if (currenIndexImg.value !== 0) {
    prevImg();
    //
  } else {
    currenIndexImg.value = props.imagesSrc.length;
    prevImg();
  }
};

const getNextImage = () => {
  if (currenIndexImg.value !== props.imagesSrc.length - 1) {
    nextImg();
  } else {
    currenIndexImg.value = -1;
    nextImg();
  }
};

const nextImg = () => {
  isDisable = true;
  currentImageClasses.value += 'opacity-0';
  currentImageClasses.value += ' -translate-x-full';
  setTimeout(() => {
    currentImageClasses.value = currentImageClasses.value.replace('-translate-x-full', '');
    currentImageClasses.value += ' translate-x-full';
    setTimeout(() => {
      currenIndexImg.value++;
      currentImage.value = props.imagesSrc[currenIndexImg.value];
      currentImageClasses.value = currentImageClasses.value.replace('opacity-0', '');
      currentImageClasses.value = currentImageClasses.value.replace('translate-x-full', '');
      isDisable = false;
    }, 350);
  }, 350);
};

const prevImg = () => {
  isDisable = true;
  currentImageClasses.value += 'opacity-0';
  currentImageClasses.value += ' translate-x-full';
  setTimeout(() => {
    currentImageClasses.value = currentImageClasses.value.replace('translate-x-full', '');
    currentImageClasses.value += ' -translate-x-full';
    setTimeout(() => {
      currenIndexImg.value--;
      currentImage.value = props.imagesSrc[currenIndexImg.value];
      currentImageClasses.value = currentImageClasses.value.replace('opacity-0', '');
      currentImageClasses.value = currentImageClasses.value.replace('-translate-x-full', '');
      isDisable = false;
    }, 350);
  }, 350);
};

const getImage = (index: number) => {
  if (isDisable) return;
  if (index > currenIndexImg.value) {
    currenIndexImg.value = index - 1;
    nextImg();
  } else {
    currenIndexImg.value = index + 1;
    prevImg();
  }
};
</script>
