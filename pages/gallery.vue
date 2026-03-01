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
                 class="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-xs"
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
          <div class="relative w-full bg-gray-100 aspect-w-4 aspect-h-3">
             <!-- Single Image -->
             <div v-if="item.type === 'image'" class="absolute inset-0 group">
               <img
                  :src="getImgUrl(item.src)"
                  :alt="`Gallery Image ${index}`"
                  class="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <!-- View Button overlay for single image -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20 z-10">
                   <button 
                      @click.stop="openPreview(getImgUrl(item.src))"
                      class="pointer-events-auto bg-white/90 text-gray-900 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 focus:outline-none transform transition-all flex items-center justify-center"
                      title="View Image"
                   >
                     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                   </button>
                </div>
              </div>

              <!-- Group Carousel -->
              <div v-else-if="item.type === 'group'" 
                 class="absolute inset-0 group"
                 @mouseenter="$set(item, 'isHovered', true)"
                 @mouseleave="$set(item, 'isHovered', false)"
              >
                 <img
                  :src="getImgUrl(item.images[item.currentIndex].src)"
                  :alt="`Group Image ${index}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <!-- View Button overlay for group image -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                   <button 
                      @click.stop="openPreview(getImgUrl(item.images[item.currentIndex].src))"
                      class="pointer-events-auto bg-white/90 text-gray-900 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 focus:outline-none transform transition-all flex items-center justify-center mb-6"
                      title="View Image"
                   >
                     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                   </button>
                </div>
                
                <!-- Navigation Arrows -->
                <div class="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                   <button 
                      @click.stop="prevImage(index); resetAutoSlide()"
                      class="pointer-events-auto bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none transform hover:scale-110 transition-transform"
                   >
                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                   </button>
                   <button 
                      @click.stop="nextImage(index); resetAutoSlide()"
                      class="pointer-events-auto bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none transform hover:scale-110 transition-transform"
                   >
                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                   </button>
                </div>

                <!-- Counter Pill -->
                <div class="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full font-mono z-10">
                   {{ (item.currentIndex || 0) + 1 }}/{{ item.images.length }}
                </div>
                
                <!-- Timer Progress Bar -->
                <div class="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-10">
                   <div 
                     :key="item.currentIndex"
                     class="h-full bg-white/70 animate-progress"
                   ></div>
                </div>
              </div>
          </div>



        </div>
      </div>

      <div v-else class="text-center py-20 text-gray-500">
        <p>No images found in the gallery folder yet.</p>
      </div>
    </div>

    <!-- Full Screen Image Modal -->
    <transition name="fade">
      <div v-if="previewImageUrl" class="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4 md:p-10" @click.self="closePreview">
        
        <!-- Close Button -->
        <button 
          @click="closePreview" 
          class="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all focus:outline-none z-10"
          title="Close Preview"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <!-- Image Container -->
        <div class="relative max-w-full max-h-full flex items-center justify-center animate-scale-in">
          <img 
            :src="previewImageUrl" 
            class="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-sm" 
            alt="Full screen preview" 
          />
        </div>
      </div>
    </transition>
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
          return { ...item, currentIndex: 0, isHovered: false }
        }
        return item
      }),
      autoSlideInterval: null,
      previewImageUrl: null
    }
  },
  mounted() {
    // If fetch didn't hydrate the array (e.g. error or client navigation edge case), load manually
    if (this.items.length === 0) {
       this.loadGallery()
    }
    this.startAutoSlide()
  },
  beforeDestroy() {
    this.stopAutoSlide()
  },
  methods: {
    startAutoSlide() {
      this.stopAutoSlide()
      this.autoSlideInterval = setInterval(() => {
        this.items.forEach((item, index) => {
          if (item.type === 'group' && !item.isHovered) {
             if (item.currentIndex === undefined) this.$set(item, 'currentIndex', 0)
             item.currentIndex = (item.currentIndex + 1) % item.images.length
          }
        })
      }, 4000)
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval)
      }
    },
    resetAutoSlide() {
      this.startAutoSlide()
    },
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
    },
    openPreview(url) {
      this.previewImageUrl = url
      document.body.style.overflow = 'hidden' // prevent scrolling
    },
    closePreview() {
      this.previewImageUrl = null
      document.body.style.overflow = ''
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

/* Aspect Ratio Polyfill (if tailwind aspect-ratio plugin isn't active) */
.aspect-w-4 {
  position: relative;
  padding-bottom: 75%; /* 4:3 Aspect Ratio */
}
.aspect-w-4 > * {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@keyframes progress {
  0% { width: 0; }
  100% { width: 100%; }
}
.animate-progress {
  animation: progress 4000ms linear forwards;
}
.group:hover .animate-progress {
  animation-play-state: paused;
}

/* Modal Animations */
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
