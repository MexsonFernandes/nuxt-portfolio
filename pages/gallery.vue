<template>
  <div class="relative">
    <PageHeader
      title="Gallery"
      description="A glimpse into my workshop, events, and projects."
    />

    <div class="flex-grow min-h-screen px-4 md:px-10 py-12 bg-gray-50">
      <div v-if="items.length > 0" class="max-w-7xl mx-auto masonry-container space-y-8">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="masonry-item mb-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
        >
          
          <!-- Header/Info Section (Optional, mimicking Media Card Header) -->
          <div class="p-4 flex items-center justify-between border-b border-gray-50">
            <div class="flex items-center space-x-3">
               <!-- Icon based on type -->
               <div 
                 class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                 :class="item.type === 'group' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'"
               >
                 <svg v-if="item.type === 'group'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                 <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               </div>
               <div>
                  <p class="text-sm font-bold text-gray-900 leading-none">
                    {{ item.type === 'group' ? formatName(item.name) : formatName(item.title) }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">
                    {{ item.type === 'group' ? `${item.images.length} Photos` : 'Single Shot' }}
                  </p>
               </div>
            </div>
          </div>

          <!-- Image Section -->
          <div class="relative w-full bg-gray-100">
             <!-- Single Image -->
             <img
                v-if="item.type === 'image'"
                :src="getImgUrl(item.src)"
                :alt="`Gallery Image ${index}`"
                class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <!-- Group Carousel -->
              <div v-else-if="item.type === 'group'" class="relative group">
                 <img
                  :src="getImgUrl(item.images[item.currentIndex].src)"
                  :alt="`Group Image ${index}`"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
                
                <!-- Navigation Arrows -->
                <div class="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                   <button 
                      @click.stop="prevImage(index)"
                      class="pointer-events-auto bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none transform hover:scale-110 transition-transform"
                   >
                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                   </button>
                   <button 
                      @click.stop="nextImage(index)"
                      class="pointer-events-auto bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none transform hover:scale-110 transition-transform"
                   >
                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                   </button>
                </div>

                <!-- Counter Pill -->
                <div class="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full font-mono">
                   {{ (item.currentIndex || 0) + 1 }}/{{ item.images.length }}
                </div>
              </div>
          </div>



        </div>
      </div>

      <div v-else class="text-center py-20 text-gray-500">
        <p>No images found in the gallery folder yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
import galleryData from '~/static/gallery.json'

export default {
  name: 'GalleryPage',
  data() {
    return {
      items: galleryData.map(item => {
        if (item.type === 'group') {
          return { ...item, currentIndex: 0 }
        }
        return item
      })
    }
  },
  // fetch() removed as we import data directly
  mounted() {
    // mounted logic for fallback removed as data is static
  },
  mounted() {
    // If fetch didn't hydrate the array (e.g. error or client navigation edge case), load manually
    if (this.items.length === 0) {
       this.loadGallery()
    }
  },
  methods: {
    async loadGallery() {
        try {
            const response = await fetch('/gallery.json')
            if (response.ok) {
                this.items = await response.json()
            }
        } catch (e) {
            console.error('Failed to fetch gallery.json', e)
        }
    },
    formatName(name) {
      return name
    },
    getImgUrl(path) {
        if (!path) return ''
        if (path.startsWith('http')) return path
        // Base URL for Cloudflare Image Resizing
        const baseUrl = 'http://media.mexsonfernandes.com/cdn-cgi/image/width=800,quality=70/gallery/'
        // Avoid double slashes if path starts with /
        const cleanPath = path.startsWith('/') ? path.substring(1) : path
        return `${baseUrl}${cleanPath}`
    },
    nextImage(itemIndex) {
       const item = this.items[itemIndex]
       if (item && item.type === 'group') {
          // ensure currentIndex exists
          if (item.currentIndex === undefined) this.$set(item, 'currentIndex', 0)
          item.currentIndex = (item.currentIndex + 1) % item.images.length
       }
    },
    prevImage(itemIndex) {
       const item = this.items[itemIndex]
       if (item && item.type === 'group') {
          if (item.currentIndex === undefined) this.$set(item, 'currentIndex', 0)
          item.currentIndex = (item.currentIndex - 1 + item.images.length) % item.images.length
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
  page-break-inside: avoid;
}
</style>
