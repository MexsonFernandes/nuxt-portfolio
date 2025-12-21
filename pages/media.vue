<template>
  <div class="relative">
    <page-header title="Media"></page-header>
    <div class="flex-grow min-h-screen px-4 md:px-10 py-12 bg-gray-50">
      
      <!-- Intro Text (Optional) -->
      <div class="max-w-4xl mx-auto text-center mb-12">
        <p class="text-lg text-gray-600">
          A collection of my appearances in news channels, newspapers, and other media outlets.
        </p>
      </div>

      <!-- Media Wall / Feed (Masonry Layout) -->
      <div class="max-w-7xl mx-auto masonry-container space-y-8">
        <div
          v-for="item in mediaList"
          :key="item.id"
          class="masonry-item mb-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
        >
          <!-- Post Header -->
          <div class="p-4 flex items-center justify-between border-b border-gray-50">
            <div class="flex items-center space-x-3">
               <!-- Initial Avatar style icon for Source -->
               <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                 {{ item.source.charAt(0) }}
               </div>
               <div>
                  <p class="text-sm font-bold text-gray-900 leading-none">{{ item.source }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">{{ item.date }}</p>
               </div>
            </div>
            <a v-if="item.link" :href="item.link" target="_blank" class="text-gray-400 hover:text-gray-600">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>

          <!-- Description / Text -->
          <div class="px-4 py-3">
             <h3 class="text-lg font-bold text-gray-900 mb-2 leading-tight">{{ item.title }}</h3>
             <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">{{ item.description }}</p>
          </div>

          <!-- Image Section -->
          <div v-if="item.image" class="relative w-full bg-gray-100 mt-auto">
            <img 
              :src="getImgUrl(item.image)" 
              class="w-full h-auto object-cover"
              alt="Media Content"
            />
          </div>

          <!-- Post Footer -->
          <div class="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
             <span class="px-2 py-1 text-[10px] font-semibold text-gray-500 bg-gray-200 rounded-full uppercase tracking-wide">
                {{ item.type }}
             </span>
             <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 font-medium text-xs hover:underline flex items-center"
              >
                View
                <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mediaList() {
      return this.$store.getters['media/getMedia']
    }
  },
  methods: {
    getImgUrl(path) {
      if (!path) return ''
      try {
        // If path starts with /, it's in public/static folder
        if (path.startsWith('/')) return path
        if (path.startsWith('http')) return path
        return require(`~/assets/images/${path}`)
      } catch (e) {
        // Fallback or error handling
        return require('~/assets/images/mexson.png')
      }
    }
  }
}
</script>

<style scoped>
.masonry-container {
  column-count: 1;
  column-gap: 2rem;
}
@media (min-width: 768px) {
  .masonry-container {
    column-count: 2;
  }
}
@media (min-width: 1024px) {
  .masonry-container {
    column-count: 3;
  }
}
.masonry-item {
  break-inside: avoid;
  page-break-inside: avoid; /* Firefox */
}
</style>
