<template>
  <div>
    <page-header title="Work"></page-header>
    <div class="flex-grow min-h-screen px-10 bg-white-100">
      <div
        class="text-xs cursor-pointer inline-flex items-center font-bold leading-sm uppercase px-3 py-1 text-white rounded-full mr-2"
        v-for="type in types"
        :key="type.name"
        :class="{ 'animate-pulse': activeFilter === type.name }"
        :style="`background: ${type.color}`"
        @click="filterByType(type.name)"
      >
        {{ type.name }}
        &nbsp;<span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-white rounded-full"> {{ type.count }}</span>
      </div>
      <div v-for="project in projects" :key="`${project.id}-data`" class="mt-5">
        <h3 class="mt-0 text-4xl font-normal leading-normal">
          {{ project.title }}
        </h3>
        <div
          class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 text-white rounded-full"
          :style="`background: ${getBadgeColor(project.type)}`"
        >
          {{ project.type }}
        </div>
        <h3 class="mt-0 mb-2 text-2xl font-normal leading-normal">
          <vue-markdown :source="project.subtitle" />
        </h3>
        <div class="markdown">
          <vue-markdown :source="project.description" />
        </div>

        <div
          v-if="
            project.skill_used &&
            project.skill_used.length &&
            project.skill_used.length > 0
          "
        >
          <br />
          <span class="font-bold">Tech Stack</span>
          <div class="flex flex-wrap">
            <div
              v-for="badge in project.skill_used"
              :key="`${badge.name}-data`"
              class="w-12 m-1 flex-4 has-tooltip"
            >
              <div class="relative flex flex-col items-center group">
                <span
                  class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                  >#{{ badge.name }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="
            project.contributors &&
            project.contributors.length &&
            project.contributors.length > 0
          "
        >
          <br />
          <span class="font-bold">Team</span>
          <div class="flex flex-wrap">
            <div
              v-for="user in project.contributors"
              :key="`${user.id}-data`"
              class="m-1 flex-4 has-tooltip"
            >
              <div
                class="relative flex flex-col items-center group cursor-pointer"
              >
                <!-- <div class="w-12 h-12">
                  <img
                    class="m-1 rounded-full grayscale hover:grayscale-0"
                    :alt="user.name"
                    :src="`${base}/assets/${user.photo}`"
                  />
                </div> -->
                <a :href="user.linkedin || '#'" target="_blank">{{
                  user.name
                }}</a>
                <!-- <div
                  class="absolute bottom-0 flex flex-col items-center hidden mb-12 group-hover:flex"
                >
                  <span
                    class="relative z-10 p-1 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg"
                    >{{ user.name }}</span
                  >
                  <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div v-if="project.github_link || project.web_link">
          <br />
          <span class="font-bold">Links</span>
          <div class="flex flex-wrap">
            <div
              class="w-8 h-8 m-1 flex-4"
              v-if="project.github_link && project.open_source"
            >
              <a
                :aria-label="project.github_link"
                rel="noopener"
                class="rounded-full"
                target="_blank"
                :href="project.github_link"
                ><img
                  class="rounded-full grayscale hover:grayscale-0"
                  src="~/assets/images/icons/github.svg"
              /></a>
            </div>
            <div class="w-8 h-8 m-1 flex-4" v-if="project.web_link">
              <a
                :aria-label="project.web_link"
                rel="noopener"
                class="rounded-full"
                target="_blank"
                :href="project.web_link"
                ><img
                  class="rounded-full grayscale hover:grayscale-0"
                  src="~/assets/images/icons/link.png"
              /></a>
            </div>
          </div>
        </div>

        <div class="mt-5"></div>

        <hr
          class="text-2xl text-center border-black"
          data-hr-content="Title"
          style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    'vue-markdown': VueMarkdown,
  },
  data: () => {
    return {
    }
  },
  async asyncData() {
    const res = await fetch(
      `${process.env.base}/items/Projects?filter={"status": {"_eq": "Live"}}&fields=contributors.*,title,description,subtitle,type,github_link,web_link,skill_used.name&sort=-start`,
      {
        headers: {
          Authorization: `Bearer ${process.env.token}`,
        },
      }
    )
    const defaultFilterText = 'All'
    var projects = (await res.json()).data

    var types = new Set()
    types.add(defaultFilterText)
    projects.map((p) => {
      types.add(p.type)
    })

    const colors = ['#1e293b', '#06b6d4', '#65a30d', '#6366f1', '#ec4899']

    // create the badges
    types = Array.from(types)
    console.log(types)
    types.map((t, index) => {
      types[index] = {
        name: t,
        color: colors[index],
        count: t === defaultFilterText ? projects.length : projects.filter(p => p.type === t).length
      }
    })
    console.log(types)

    return {
      projects,
      availableList: projects,
      base: process.env.REST_API_ENDPOINT,
      types,
      activeFilter: defaultFilterText,
      defaultFilterText
    }
  },
  methods: {
    getBadgeColor(name) {
      return this.types.find((t) => t.name === name).color
    },
    filterByType(name) {
      this.activeFilter = name
      if (name === this.defaultFilterText) {
        this.projects = this.availableList
      } else {
        this.projects = this.availableList.filter((p) => p.type === name)
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
