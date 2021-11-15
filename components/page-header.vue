<template>
  <div class="sticky top-0 z-50 w-full text-black bg-white">
    <h2 class="mt-0 mb-2 text-5xl font-normal leading-normal">
      {{ title }}
    </h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    description: {
      default: "",
      type: String,
    },
  },
};
</script>
