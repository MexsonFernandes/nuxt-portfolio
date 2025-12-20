<template>
  <div class="relative">
    <page-header title="Affiliations"></page-header>
    <div class="flex-grow min-h-screen px-4 md:px-10 py-12 bg-white-100">
      
      <!-- Intro Section -->
      <div class="max-w-4xl mx-auto mb-12 text-center">
        <p class="text-xl text-gray-600">
          Collaborations, associations, and communities I am proud to be part of.
        </p>
      </div>

      <!-- Filters -->
      <div class="flex justify-center mb-10 space-x-2 md:space-x-4 flex-wrap gap-y-2">
        <button
          v-for="type in types"
          :key="type"
          @click="activeFilter = type"
          class="px-4 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300"
          :class="activeFilter === type ? 'bg-black text-white shadow-lg transform scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          {{ type }}
        </button>
      </div>

      <!-- Affiliations Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div
          v-for="item in filteredAffiliations"
          :key="item.id"
          class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 group"
        >
            <div class="h-24 w-24 mb-4 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img :src="item.logo" :alt="item.name" class="max-h-full max-w-full object-contain" />
            </div>

            <h3 class="text-lg font-bold text-gray-900 mb-1">
              {{ item.name }}
            </h3>
            
            <p class="text-blue-600 font-medium text-sm mb-2">
                {{ item.role }}
            </p>

             <span class="inline-block px-2 py-1 bg-gray-50 text-xs text-gray-400 font-mono rounded mt-auto">
                {{ item.year }}
             </span>
             
             <!-- Type Label (Optional, maybe smaller or standard badge?) -->
             <!-- <span class="mt-2 text-[10px] uppercase tracking-widest text-gray-300">{{ item.type }}</span> -->
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredAffiliations.length === 0" class="text-center py-20">
        <h3 class="text-xl font-bold text-gray-400">No affiliations found for this category.</h3>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'All'
    }
  },
  computed: {
    affiliations() {
      return this.$store.getters['affiliations/getAffiliations']
    },
    types() {
      return this.$store.getters['affiliations/getTypes']
    },
    filteredAffiliations() {
      if (this.activeFilter === 'All') {
        return this.affiliations
      }
      return this.affiliations.filter(r => r.type === this.activeFilter)
    }
  }
}
</script>
