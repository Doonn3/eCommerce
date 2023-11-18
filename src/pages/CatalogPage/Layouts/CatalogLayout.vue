<template>
  <section class="catalog relative grid grid-flow-col grid-cols-[20%_auto] p-2">
    <div class="space-y-2 border-r-4 border-base-content pr-2">
      <slot name="aside"></slot>
    </div>

    <div>
      <slot name="content"></slot>
    </div>
  </section>
</template>
