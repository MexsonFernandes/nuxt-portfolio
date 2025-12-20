<template>
  <div class="relative">
    <page-header title="Research"></page-header>
    <div class="flex-grow min-h-screen px-4 md:px-10 py-12 bg-white-100">
      
      <!-- Intro Section -->
      <div class="max-w-4xl mx-auto mb-12 text-center">
        <p class="text-xl text-gray-600">
          Selected publications, preprints, and research articles.
        </p>
      </div>

      <!-- Research List -->
      <div class="max-w-5xl mx-auto space-y-8">
        <div
          v-for="paper in papers"
          :key="paper.id"
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-100 flex flex-col md:flex-row md:items-start gap-6"
        >
           <!-- Left: Year/Meta -->
           <div class="md:w-32 flex-shrink-0 flex flex-col items-start md:items-center text-center">
             <span class="text-4xl font-bold text-gray-200 leading-none">{{ paper.year }}</span>
             <span class="text-xs font-bold text-gray-500 uppercase mt-2 tracking-wide">{{ paper.conference }}</span>
           </div>

           <!-- Right: Content -->
           <div class="flex-grow">
             <h3 class="text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
               <a :href="paper.link" target="_blank">{{ paper.title }}</a>
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
             <a :href="paper.link" target="_blank" class="p-2 text-gray-400 hover:text-blue-600 transition-colors block" title="Read Paper">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
             </a>
           </div>

        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="papers.length === 0" class="text-center py-20">
        <h3 class="text-xl font-bold text-gray-400">No research papers found.</h3>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    papers() {
      return this.$store.getters['research/getPapers']
    }
  }
}
</script>
