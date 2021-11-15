<template>
  <div>
    <nuxt-link to="/blog" class="text-sm text-blue-400">Go Back</nuxt-link
    ><br />
    <main class="container relative px-4 mx-auto bg-white">
      <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
        <img
          class="
            absolute
            inset-0
            object-cover object-top
            w-full
            h-full
            filter
            blur
          "
          :src="data[0].image.url"
          :alt="data[0].title"
        />
      </div>

      <div class="mt-[-10%] w-1/2 mx-auto">
        <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
          {{ data[0].image.url }}
          <img
            class="absolute inset-0 object-cover w-full h-full"
            :src="data[0].image.url"
            :alt="data[0].title"
          />
        </div>
      </div>

      <article class="py-8 mx-auto max-w-prose">
        <h1 class="text-2xl font-bold">
          {{ data[0].title }}
        </h1>
        <h2 class="mt-2 text-sm text-gray-500">{{ data[0].date }}</h2>
        <vue-markdown class="markdown" :source="data[0].content" />
      </article>
    </main>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    'vue-markdown': VueMarkdown,
  },
  async asyncData({ params, redirect }) {
    const data = await (
      await fetch(`${process.env.base}/articles?slug=${params.blog_slug}`)
    ).json()

    if (data.length && data.length === 0) {
      redirect('/blog')
    }
    return {
      data,
    }
  },
}
</script>

<style>
.markdown ul,
.markdown ol {
  list-style: disc;
  margin-left: 25px;
}
</style>
