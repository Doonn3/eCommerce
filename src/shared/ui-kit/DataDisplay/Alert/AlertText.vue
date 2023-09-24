<script lang="ts" setup>
type PropsType = {
  status: 'success' | 'warning' | 'error' | 'info';
  message: string;
};

const props = withDefaults(defineProps<PropsType>(), {
  status: 'info',
  message: ''
});

const statusClassStyle = () => {
  switch (props.status) {
    case 'success':
      return 'alert-success';

    case 'warning':
      return 'alert-warning';

    case 'error':
      return 'alert-error';

    default:
      return 'alert-info';
  }
};
</script>

<template>
  <div
    class="alert"
    :class="statusClassStyle()"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{{ props.message }}</span>
  </div>
</template>
