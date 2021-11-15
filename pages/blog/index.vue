<template>
  <div class="ml-5">
    <page-header title="Blog"></page-header>
    <div class="overflow-x-hidden">
      <div class="px-6 py-8">
        <div class="container flex justify-between mx-auto">
          <div class="w-full lg:w-8/12">
            <div
              v-for="article in articles"
              :key="`${article._id}-data`"
              class="mt-6"
            >
              <div
                class="max-w-4xl px-10 py-6 mx-auto bg-white bg-gray-100 rounded-lg shadow-md "
              >
                <div class="flex items-center justify-between">
                  <span class="font-light text-gray-600">{{
                    parseTime(article.date)
                  }}</span
                  ><a
                    href="#"
                    class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded  hover:bg-gray-500"
                    >{{ article.category.name }}</a
                  >
                </div>
                <div class="mt-2">
                  <nuxt-link
                    :to="`/blog/${article.slug}`"
                    class="text-2xl font-bold text-gray-700 hover:underline"
                    >{{ article.title }}</nuxt-link
                  >
                  <p class="mt-2 text-gray-600">
                    {{ article.description }}
                  </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <nuxt-link
                    :to="`/blog/${article.slug}`"
                    class="text-blue-500 hover:underline"
                    >Read more</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="hidden w-4/12 -mx-8 lg:block">
            <div class="px-8 mt-10">
              <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
              <div
                class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md "
              >
                <ul>
                  <li
                    v-for="category in categories"
                    :key="`${category._id}-category`"
                    class="flex items-center mt-2"
                  >
                    <nuxt-link
                      to="#"
                      class="mx-1 font-bold text-gray-700  hover:text-gray-600 hover:underline"
                      >- {{ category.name }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  async asyncData() {
    const articleRes = await fetch(
      `${process.env.base}/articles?_sort=date:DESC`
    )
    const categoryRes = await fetch(
      `${process.env.base}/categories?_sort=date:DESC`
    )
    return {
      articles: await articleRes.json(),
      categories: await categoryRes.json(),
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
