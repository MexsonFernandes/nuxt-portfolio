<template>
  <div>
    <page-header
      title="Interests"
      description="I like to learn about different fields and how their integration would help to create a great solution."
    ></page-header>

    <div class="flex-grow min-h-screen px-10 pt-12 pb-12 bg-white-100">
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          md:gap-x-10
          xl-grid-cols-6
          gap-y-10 gap-x-6
        "
      >
        <div
          v-for="interest in interests"
          :key="`${interest._id}-data`"
          class="
            container
            max-w-md
            mx-auto
            transition
            duration-300
            rounded-lg
            shadow-lg
            hover:shadow-2xl
          "
        >
          <div class="max-w-screen-lg pb-10 mx-auto hero">
            <img
              :src="`${interest.image.url}`"
              :alt="`${interest.title}`"
              class="w-48 h-48 mx-auto max-h-48 max-w-48"
            />
          </div>
          <div class="p-6">
            <h1
              class="
                text-xl
                font-bold
                text-gray-900
                transition
                duration-200
                md:text-1xl
                hover:text-blue-600
              "
            >
              {{ interest.title }}
            </h1>
            <p class="my-2 text-gray-700 hover-text-900">
              {{ interest.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const res = await fetch(`${process.env.base}/interests`)
    return {
      interests: await res.json(),
    }
  },
}
</script>

<style scoped>
img {
  height: 200px;
}
</style>
