<template>
  <div class="relative">
    <page-header title="Resources"></page-header>
    <div class="flex-grow min-h-screen px-4 md:px-10 py-12 bg-white-100">
      
      <!-- Intro Section -->
      <div class="max-w-4xl mx-auto mb-12 text-center">
        <p class="text-xl text-gray-600">
          A collection of my talks, roadmaps, and other resources I've shared.
        </p>
      </div>

      <!-- Filters -->
      <div class="flex justify-center mb-10 space-x-4">
        <button
          v-for="year in years"
          :key="year"
          @click="activeFilter = year"
          class="px-5 py-2 rounded-full font-bold transition-all duration-300"
          :class="activeFilter === year ? 'bg-black text-white shadow-lg transform scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          {{ year }}
        </button>
      </div>

      <!-- Resources Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="resource in filteredResources"
          :key="resource.id"
          class="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100"
        >
          <div class="p-6 flex-grow">
            <div class="flex justify-between items-start mb-4">
              <span class="px-3 py-1 text-xs font-bold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wider">
                {{ resource.type }}
              </span>
              <span class="text-xs text-gray-400 font-mono">{{ formatDate(resource.date) }}</span>
            </div>

            <h3 class="text-2xl font-bold text-gray-800 mb-2 leading-tight">
              {{ resource.title }}
            </h3>
            <h4 class="text-md font-medium text-gray-500 mb-4 font-serif italic">
              {{ resource.subtitle }}
            </h4>
            
            <p class="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {{ stripMarkdown(resource.text) }}
            </p>
          </div>

          <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center mt-auto">
             <button 
               @click="openModal(resource)"
               class="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center group"
             >
               Read More
               <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
             </button>
          </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredResources.length === 0" class="text-center py-20">
        <h3 class="text-2xl font-bold text-gray-400">No resources found for this category.</h3>
      </div>

    </div>

    <!-- Resource Details Modal -->
    <transition name="fade">
      <div v-if="selectedResource" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm" @click.self="closeModal">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-scale-in">
          <!-- Modal Header -->
          <div class="sticky top-0 bg-white z-10 px-8 py-6 border-b border-gray-100 flex justify-between items-start">
            <div>
              <div class="flex items-center space-x-3 mb-2">
                <span
                  class="px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-full uppercase"
                >
                  {{ selectedResource.type }}
                </span>
                <span class="text-sm text-gray-500">{{ formatDate(selectedResource.date) }}</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mt-2">{{ selectedResource.title }}</h2>
              <h3 class="text-lg font-medium text-gray-500 font-serif italic">{{ selectedResource.subtitle }}</h3>
            </div>
            <button @click="closeModal" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="px-8 py-8">
            <div class="prose prose-blue max-w-none text-gray-700 leading-relaxed markdown">
               <vue-markdown :source="selectedResource.text" />
            </div>

            <!-- Download Section -->
            <div v-if="selectedResource.download" class="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <a 
                :href="selectedResource.download" 
                download
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Resource
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { format } from 'date-fns'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    'vue-markdown': VueMarkdown,
  },
  data() {
    return {
      activeFilter: 'All',
      selectedResource: null // State for the modal
    }
  },
  computed: {
    resources() {
      const res = [...this.$store.getters['resources/getResources']]
      return res.sort((a, b) => new Date(b.date) - new Date(a.date))
    },
    years() {
      return this.$store.getters['resources/getYears']
    },
    filteredResources() {
      if (this.activeFilter === 'All') {
        return this.resources
      }
      return this.resources.filter(r => r.date && r.date.startsWith(this.activeFilter))
    }
  },
  created() {
    if (this.years && this.years.length > 1) {
      this.activeFilter = this.years[1]
    }
  },
  methods: {
    formatDate(date) {
      try {
        return format(new Date(date), 'MMMM yyyy')
      } catch (e) {
        return date
      }
    },
    stripMarkdown(text) {
      if (!text) return ''
      return text
        .replace(/(\*\*|__)(.*?)\1/g, '$2') // bold
        .replace(/(\*|_)(.*?)\1/g, '$2') // italic
        .replace(/~{2}(.*?)~{2}/g, '$1') // strikethrough
        .replace(/`{3}[\s\S]*?`{3}/g, '') // code block
        .replace(/`(.+?)`/g, '$1') // inline code
        .replace(/#{1,6}\s+(.*)/g, '$1') // headers
        .replace(/!\[.*?\]\(.*?\)/g, '') // images
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // links
        .replace(/>\s+(.*)/g, '$1') // blockquotes
        .replace(/(\r\n|\n|\r)/g, ' ') // newlines to space
        .replace(/\s+/g, ' ') // multiple spaces to single
        .trim()
    },
    openModal(resource) {
      this.selectedResource = resource
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedResource = null
      document.body.style.overflow = ''
    }
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
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
