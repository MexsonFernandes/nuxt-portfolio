<template>
  <div>
    <nuxt-link to="/resources" class="text-sm text-blue-400">Go Back</nuxt-link
    ><br />
    <main class="container relative px-4 mx-auto bg-white">

      <article class="py-8 mx-auto max-w-prose">
        <h1 class="text-2xl font-bold">
          {{ data.name }}
        </h1>
        <vue-markdown
          class="markdown"
          :source="`[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${url}&count_bg=%233D6FC8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false)]()`"
        />
        <h2 v-if="data.date" class="mt-2 text-sm text-gray-500">
          Posted on {{ parseTime(data.actual_uploaded) }}
        </h2>
        <vue-markdown class="markdown" :source="data.content" />
      </article>
    </main>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { format } from 'date-fns'

export default {
  components: {
    'vue-markdown': VueMarkdown,
  },
  async asyncData({ params, redirect }) {
    console.log(params)
    const url = params.blog_slug
    params.blog_slug = url.replace(new RegExp('-', "g"), ' ')
    console.log(params)
    const data = (await (
      await fetch(`${process.env.base}/items/Resources?filter[name][_eq]=${params.blog_slug}`, {
        headers: { 
          'Authorization': `Bearer ${process.env.token}`
        }
      })
    ).json()).data
    console.log(data)
    if (data.length && data.length === 0) {
      redirect('/resources')
    }
    return {
      data: data[0],
      url: `${process.env.base}/resources/${url}`,
    }
  },
  methods: {
    parseTime(date) {
      try {
        return format(new Date(date), 'dd MMM yyyy')
      } catch (e) {
        return ''
      }
    },
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
