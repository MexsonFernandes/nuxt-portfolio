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
          :key="`${interest.id}-data`"
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
          <div class="max-w-screen-lg mx-auto hero">
            <img
              :src="interest.icon_link"
              :alt="`${interest.name}`"
              class="h-48 mx-auto max-h-48"
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
              {{ interest.name }}
            </h1>
            <p class="my-2 text-gray-700 hover-text-900">
              {{ interest.brief }}
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
    const res = await fetch(`${process.env.base}/items/Field_of_Interest`, {
      headers: { 
        'Authorization': `Bearer ${process.env.token}`
      }
    })
    const interests = (await res.json()).data

    for (var entry = 0; entry < interests.length; entry++) {
      interests[entry].image = await (await fetch(`${process.env.base}/assets/${interests[entry].depiction}?download=true`, {
        headers: { 
          'Authorization': `Bearer ${process.env.token}`
        }
      })).blob()
    }

    return {
      interests,
    }
  },
  mounted() {
    if (process.browser) {
      try {
        console.log(this.interests)
      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 200px;
}
</style>
