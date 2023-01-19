<template>
  <div class="ml-5">
    <page-header title="Resources"></page-header>
    <div class="overflow-x-hidden">
      <div class="px-6 py-8">
        <div class="container flex justify-between mx-auto">
          <div class="w-full lg:w-8/12">
            <div
              v-for="article in articles"
              :key="`${article.id}-data`"
              class="mt-6"
            >
              <div
                class="max-w-4xl px-10 py-6 mx-auto bg-white bg-gray-100 rounded-lg shadow-md "
              >
                <div class="flex items-center justify-between">
                  <span class="font-light text-gray-600">{{
                    parseTime(article.actual_uploaded)
                  }}</span
                  ><a
                    href="#"
                    class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded  hover:bg-gray-500"
                    >{{ article.type }}</a
                  >
                </div>
                <div class="mt-2">
                  <nuxt-link
                    :to="`/resources/${article.slug}`"
                    class="text-2xl font-bold text-gray-700 hover:underline"
                    >{{ article.name }}</nuxt-link
                  >
                  <p class="mt-2 text-gray-600">
                    {{ article.brief }}
                  </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <nuxt-link
                    :to="`/resources/${article.slug}`"
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
                    v-for="(category, index) in categories"
                    :key="`${index}-category`"
                    class="flex items-center mt-2"
                  >
                    <nuxt-link
                      to="#"
                      class="mx-1 font-bold text-gray-700  hover:text-gray-600 hover:underline"
                      >- {{ category }}</nuxt-link
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
      `${process.env.base}/items/Resources?sort=-actual_uploaded&filter[status][_eq]=published`, {
        headers: { 
          'Authorization': `Bearer ${process.env.token}`
        }
      }
    )
    const articles = (await articleRes.json()).data
    console.log(articles)
    const categories = new Set();
    articles.map((a) => {
      categories.add(a.type)

      // create slug
      a.slug = a.name.replace(new RegExp(' ', "g"), '-')
    })

    return {
      articles,
      categories: Array.from(categories),
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
