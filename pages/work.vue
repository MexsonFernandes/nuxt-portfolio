<template>
  <div class="relative">
    <page-header title="Work"></page-header>
    <div class="flex-grow min-h-screen px-4 md:px-10 py-12 bg-gray-50">
      <!-- Filters -->
      <div class="flex flex-wrap gap-3 mb-10 justify-center">
        <div
          class="text-sm cursor-pointer inline-flex items-center font-bold px-4 py-2 text-white rounded-full transition-all duration-300"
          v-for="type in types"
          :key="type.name"
          :class="activeFilter === type.name ? 'ring-4 ring-white ring-opacity-100 shadow-xl scale-110 z-10' : 'shadow-md hover:scale-105 opacity-75 hover:opacity-100'"
          :style="`background: ${type.color}`"
          @click="filterByType(type.name)"
        >
          {{ type.name }}
          <span class="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-black bg-white rounded-full opacity-90">{{ type.count }}</span>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
        >
          <!-- Card Header / Banner (Optional: You could add a gradient or image here) -->
          <div class="h-2" :style="`background: ${getBadgeColor(project.type)}`"></div>

          <div class="p-6 flex-grow flex flex-col">
            <div class="flex justify-between items-start mb-4">
              <span
                class="px-3 py-1 text-xs font-bold text-white rounded-full uppercase tracking-wider"
                :style="`background: ${getBadgeColor(project.type)}`"
              >
                {{ project.type }}
              </span>
            </div>

            <h3 class="text-2xl font-bold text-gray-800 mb-2 leading-tight">
              {{ project.title }}
            </h3>

            <div class="text-gray-600 mb-4 flex-grow prose-sm">
              <vue-markdown :source="project.subtitle || ''" />
            </div>

            <!-- Tech Stack Preview (Top 3) -->
            <div class="flex flex-wrap gap-2 mb-6" v-if="project.skill_used && project.skill_used.length">
              <span
                v-for="tech in project.skill_used.slice(0, 3)"
                :key="tech.name"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
              >
                #{{ tech.name }}
              </span>
              <span v-if="project.skill_used.length > 3" class="px-2 py-1 text-gray-400 text-xs font-medium">
                +{{ project.skill_used.length - 3 }} more
              </span>
            </div>

            <!-- Actions -->
            <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <button
                @click="openModal(project)"
                class="text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm flex items-center group"
              >
                View Details
                <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>

              <div class="flex space-x-3">
                <a
                  v-if="project.github_link"
                  :href="project.github_link"
                  target="_blank"
                  class="text-gray-400 hover:text-gray-800 transition-colors"
                  title="View Source"
                >
                  <img src="~/assets/images/icons/github.svg" class="w-5 h-5 grayscale hover:grayscale-0 opacity-70 hover:opacity-100" />
                </a>
                <a
                  v-if="project.web_link"
                  :href="project.web_link"
                  target="_blank"
                  class="text-gray-400 hover:text-blue-600 transition-colors"
                  title="Visit Website"
                >
                  <img src="~/assets/images/icons/link.png" class="w-5 h-5 grayscale hover:grayscale-0 opacity-70 hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <transition name="fade">
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm" @click.self="closeModal">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-scale-in">
          <!-- Modal Header -->
          <div class="sticky top-0 bg-white z-10 px-8 py-6 border-b border-gray-100 flex justify-between items-start">
            <div>
              <div class="flex items-center space-x-3 mb-2">
                <h2 class="text-3xl font-bold text-gray-900">{{ selectedProject.title }}</h2>
                <span
                  class="px-3 py-1 text-xs font-bold text-white rounded-full uppercase"
                  :style="`background: ${getBadgeColor(selectedProject.type)}`"
                >
                  {{ selectedProject.type }}
                </span>
              </div>
              <div class="text-gray-500 text-lg">
                <vue-markdown :source="selectedProject.subtitle || ''" />
              </div>
            </div>
            <button @click="closeModal" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="px-8 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Left Column: Description -->
              <div class="lg:col-span-2 space-y-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                    About Project
                  </h3>
                  <div class="markdown prose prose-blue max-w-none text-gray-600">
                    <vue-markdown :source="selectedProject.description || 'No description available.'" />
                  </div>
                </div>
              </div>

              <!-- Right Column: Sidebar Info -->
              <div class="space-y-8">
                <!-- Links -->
                <div v-if="selectedProject.github_link || selectedProject.web_link" class="bg-gray-50 p-6 rounded-xl">
                  <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Links</h3>
                  <div class="space-y-3">
                    <a
                      v-if="selectedProject.github_link"
                      :href="selectedProject.github_link"
                      target="_blank"
                      class="flex items-center w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-black transition-colors group"
                    >
                      <img src="~/assets/images/icons/github.svg" class="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                      <span class="font-medium text-gray-700 group-hover:text-black">View Source</span>
                      <svg class="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <a
                      v-if="selectedProject.web_link"
                      :href="selectedProject.web_link"
                      target="_blank"
                      class="flex items-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      <img src="~/assets/images/icons/link.png" class="w-5 h-5 mr-3 filter invert brightness-0" />
                      <span class="font-medium">Visit Website</span>
                      <svg class="w-4 h-4 ml-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </div>
                </div>

                <!-- Tech Stack -->
                <div v-if="selectedProject.skill_used && selectedProject.skill_used.length">
                  <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Tech Stacks</h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in selectedProject.skill_used"
                      :key="tech.name"
                      class="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100"
                    >
                      {{ tech.name }}
                    </span>
                  </div>
                </div>

                <!-- Team -->
                <div v-if="selectedProject.contributors && selectedProject.contributors.length">
                  <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Team</h3>
                  <div class="space-y-3">
                    <div v-for="user in selectedProject.contributors" :key="user.id" class="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3">
                        {{ user.name.charAt(0) }}
                      </div>
                      <div>
                        <p class="font-bold text-gray-900 text-sm">{{ user.name }}</p>
                        <a v-if="user.linkedin" :href="user.linkedin" target="_blank" class="text-xs text-blue-500 hover:underline">LinkedIn Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
      activeFilter: 'All',
      defaultFilterText: 'All',
      selectedProject: null,
    }
  },
  computed: {
    types() {
      return this.$store.getters['projects/getTypes']
    },
    projects() {
      const allProjects = this.$store.getters['projects/getProjects']
      if (this.activeFilter === this.defaultFilterText) {
        return allProjects
      }
      return allProjects.filter((p) => p.type === this.activeFilter)
    }
  },
  methods: {
    getBadgeColor(name) {
      if (!this.types) return ''
      return this.types.find((t) => t.name === name)?.color || ''
    },
    filterByType(name) {
      this.activeFilter = name
    },
    openModal(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden' // Prevent scrolling
    },
    closeModal() {
      this.selectedProject = null
      document.body.style.overflow = '' // Restore scrolling
    }
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.markdown ul,
.markdown ol {
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 1em;
}
.markdown p {
  margin-bottom: 1em;
  line-height: 1.6;
}
.markdown h1, .markdown h2, .markdown h3 {
  font-weight: bold;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  color: #111827;
}

/* Modal Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out forwards;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
