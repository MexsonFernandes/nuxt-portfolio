<template>
  <div class="mt-5">
    <div class="sticky top-0 w-full text-black bg-white">
      <div class="mt-0 text-5xl">
        <div>Mexson</div>
        <div class="text-blue-900">Fernandes</div>
      </div>
       <div style="height:30px;"></div>
      <div class="text-2xl">
        <div>RoboMex</div>
      </div>
       <div style="height:30px;"></div>
      <div>
        <button class="inline-flex items-center px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <div>Goa, India</div>
        </button>

        <button class="inline-flex items-center px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          <div><a href="tel:+91 8007503717">+91 8007503717</a></div>
        </button>
        <button class="inline-flex items-center px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div>
            <a href="mailto: robomex2020@gmail.com">robomex2020@gmail.com</a>
          </div>
        </button>
      </div>
      <div style="height:20px;"></div>
      
      <!-- YouTube Subscribe Section -->
      <div class="text-center mb-8">
        <div class="text-lg mb-4 font-bold text-gray-700">Subscribe to my Channels</div>
        <div class="flex flex-col md:flex-row justify-center items-center gap-6">
          <!-- Channel 1: Mexson Fernandes / RoboMex -->
          <div class="g-ytsubscribe" data-channelid="UC9vlPXQfuWR1NMO2BFBZueQ" data-layout="full" data-count="default"></div>
          
          <!-- Channel 2: Kverty Tech -->
          <div class="g-ytsubscribe" data-channelid="UCpi7JSTvubSyVnsDZR42ZcQ" data-layout="full" data-count="default"></div>
        </div>
      </div>

      Find me on favourite sites:
      <div class="grid grid-cols-4 gap-4 lg:grid-cols-10">
        <a
          v-for="link in links"
          :key="`${link.icon}-data`"
          :aria-label="link.icon"
          rel="noopener"
          class="w-12 h-12 m-2 rounded-full"
          target="_blank"
          :href="link.src"
          ><img
            class="rounded-half"
            :src="require(`~/assets/images/icons/${link.icon}`)"
        /></a>
      </div>
      <div style="height:60px;"></div>

      <!-- Global Reach & Reviews Section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Global Reach</h2>
        
        <div class="bg-gray-50 rounded-xl p-4 md:p-8 max-w-4xl mx-auto shadow-inner mb-8">
          <client-only>
            <world-map :active-countries="activeCountryCodes" />
          </client-only>
          <div class="mt-4 text-center text-sm text-gray-500">
             Highlighting countries where I have worked with clients.
          </div>
        </div>

        <div class="text-center">
          <button 
            @click="showReviewsModal = true"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            See 5-Star Reviews
          </button>
        </div>
      </div>

      <!-- Reviews Modal -->
      <modal :show="showReviewsModal" @close="showReviewsModal = false">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900">Client Reviews</h3>
          <p class="text-gray-500">What people are saying about my work</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="review in reviews" 
            :key="review.id"
            class="bg-gray-50 p-6 rounded-lg border border-gray-100 relative"
          >
             <div class="flex items-center mb-4">
               <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                 {{ getInitials(review.name) }}
               </div>
               <div class="ml-3 text-left">
                 <h4 class="text-sm font-bold text-gray-900">{{ review.name }}</h4>
                 <div class="flex items-center text-xs text-gray-500">
                   <span>{{ review.country }}</span>
                   <span class="mx-1">•</span>
                   <span class="text-green-600">{{ review.platform }}</span>
                 </div>
               </div>
               <div class="ml-auto flex">
                  <svg v-for="n in 5" :key="n" class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               </div>
             </div>
             <p class="text-gray-700 text-sm italic text-left">"{{ review.review }}"</p>
          </div>
        </div>
        <div class="mt-8 text-center">
          <a 
            href="https://www.fiverr.com/mexsonfernandes" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center text-green-600 font-semibold hover:underline"
          >
            View all 59+ reviews on Fiverr
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </modal>


    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import WorldMap from '~/components/WorldMap.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    'vue-markdown': VueMarkdown,
    WorldMap,
    Modal
  },
  computed: {
    reviews() {
      return this.$store.getters['reviews/getReviews'] || []
    },
    activeCountryCodes() {
      const codes = this.reviews.map(r => r.countryCode.toLowerCase())
      // add missing from review
      codes.push('ca') // Canada 
      return [...new Set(codes)]
    }
  },
  data: () => {
    return {
      showReviewsModal: false,
      hitCounter: `[![HitCount](https://api.mexsonfernandes.com/counter)](https://api.mexsonfernandes.com/counter)`,
      links: [
        {
          src: 'https://www.linkedin.com/in/mexsonfernandes',
          icon: 'linkedin.svg',
        },
        {
          src: 'https://github.com/MexsonFernandes',
          icon: 'github.svg',
        },
        {
          src: 'https://www.researchgate.net/profile/Mexson_Fernandes',
          icon: 'research-gate.png',
        },
        {
          src: 'https://www.facebook.com/mexsonfernandes',
          icon: 'facebook.svg',
        },
        {
          src: 'https://twitter.com/mexsonfernandes',
          icon: 'twitter.svg',
        },
        {
          src: 'https://www.instagram.com/robomex.tv',
          icon: 'instagram.svg',
        },
        {
          src: 'https://medium.com/@mexsonfernandes',
          icon: 'medium.svg',
        },
        {
          src: 'https://www.youtube.com/channel/UC9vlPXQfuWR1NMO2BFBZueQ',
          icon: 'youtube.svg',
        },
        {
          src: 'https://www.quora.com/profile/Mexson-Fernandes-1',
          icon: 'quora.svg',
        },
      ],
    }
  },

  mounted() {
    // Load YouTube Subscribe script
    if (window.gapi && window.gapi.ytsubscribe) {
      window.gapi.ytsubscribe.go();
    } else {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  },
  methods: {
    getInitials(name) {
      if (!name) return '?'
      return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    }
  }
}
</script>
