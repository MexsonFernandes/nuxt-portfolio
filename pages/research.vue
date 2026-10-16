<template>
  <div class="relative">
    <page-header title="Research"></page-header>
    <div class="flex-grow min-h-screen px-4 md:px-10 py-6 bg-white-100">
      
      <!-- Toolbar Header: Description + Google Scholar on left, Filters on right -->
      <div class="max-w-5xl mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 pb-5">
        <!-- Left: Description & Google Scholar -->
        <div class="flex flex-wrap items-center gap-3">
          <p class="text-sm md:text-base text-gray-600">
            Selected publications, preprints, and research articles.
          </p>
          <a
            href="https://scholar.google.com/citations?user=yDHLGPIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-xs font-semibold px-3 py-1.5 bg-white text-gray-700 hover:text-blue-600 rounded-full border border-gray-200 hover:border-blue-400 transition-colors shadow-2xs"
            title="Google Scholar Profile"
          >
            <svg class="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.687L4 21h2.5v-7.146L12 19.531l8.117-6.185a.738.738 0 0 0 .154-.153L24 9.5 12 0z"/>
            </svg>
            Google Scholar
          </a>
        </div>

        <!-- Right: Filter Pills -->
        <div class="flex items-center space-x-2 flex-wrap gap-y-2 md:justify-end flex-shrink-0">
          <button
            v-for="type in types"
            :key="type"
            class="px-3.5 py-1.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 inline-flex items-center gap-1.5"
            :class="activeFilter === type ? 'bg-black text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            @click="activeFilter = type"
          >
            <span>{{ type }}</span>
            <span
              class="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold rounded-full min-w-[18px]"
              :class="activeFilter === type ? 'bg-white text-black' : 'bg-gray-200 text-gray-600'"
            >
              {{ getCount(type) }}
            </span>
          </button>
        </div>
      </div>

      <!-- Research List -->
      <div class="max-w-5xl mx-auto space-y-8">
        <div
          v-for="paper in filteredPapers"
          :key="paper.id"
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border flex flex-col md:flex-row md:items-start gap-6"
          :class="paper.type === 'Patent' ? 'border-amber-300 bg-gradient-to-br from-amber-50/20 via-white to-white ring-1 ring-amber-200' : 'border-gray-100'"
        >
           <!-- Left: Year/Meta -->
           <div class="md:w-36 flex-shrink-0 flex flex-col items-start md:items-center text-center">
             <span class="text-4xl font-bold text-gray-200 leading-none">{{ paper.year }}</span>
             <span class="text-xs font-bold text-gray-500 uppercase mt-2 tracking-wide">{{ paper.conference }}</span>
             <span v-if="paper.type === 'Patent'" class="mt-2.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
               🏆 Granted Patent
             </span>
           </div>

           <!-- Right: Content -->
           <div class="flex-grow">
             <div v-if="paper.type === 'Patent'" class="mb-2 flex flex-wrap items-center gap-2 text-xs">
               <span class="font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">Patent No. {{ paper.patentNumber }}</span>
               <span class="text-gray-500">App: {{ paper.applicationNumber }}</span>
               <span v-if="paper.grantDate" class="text-gray-400">•</span>
               <span v-if="paper.grantDate" class="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                 Granted: {{ paper.grantDate }}
               </span>
               <span class="text-gray-400">•</span>
               <span class="text-gray-500">Published: {{ paper.publicationDate }}</span>
             </div>

             <h3 class="text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
               <a :href="paper.link" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a>
             </h3>
             
             <p class="text-sm text-gray-500 mb-4 font-mono">
               {{ paper.authors }}
             </p>

             <p class="text-gray-600 leading-relaxed mb-4">
               {{ paper.abstract }}
             </p>

             <div class="flex flex-wrap gap-2">
               <span 
                 v-for="tag in paper.tags" 
                 :key="tag"
                 class="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md border border-gray-100"
               >
                 #{{ tag }}
               </span>
             </div>
           </div>

           <!-- Action -->
           <div class="flex-shrink-0 self-start md:self-center">
             <a :href="paper.link" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-400 hover:text-blue-600 transition-colors block" :title="paper.type === 'Patent' ? 'View Official Patent' : 'Read Paper'">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
             </a>
           </div>

        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredPapers.length === 0" class="text-center py-20">
        <h3 class="text-xl font-bold text-gray-400">No research papers found.</h3>
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
    papers() {
      return this.$store.getters['research/getPapers']
    },
    types() {
      return this.$store.getters['research/getTypes']
    },
    filteredPapers() {
      if (this.activeFilter === 'All') {
        return this.papers
      }
      return this.papers.filter(p => p.type === this.activeFilter)
    }
  },
  watch: {
    '$route.query.filter'(newFilter) {
      if (newFilter && this.types.includes(newFilter)) {
        this.activeFilter = newFilter
      }
    }
  },
  mounted() {
    if (this.$route.query.filter && this.types.includes(this.$route.query.filter)) {
      this.activeFilter = this.$route.query.filter
    }
  },
  methods: {
    getCount(type) {
      if (type === 'All') {
        return this.papers.length
      }
      return this.papers.filter(p => p.type === type).length
    }
  }
}
</script>
