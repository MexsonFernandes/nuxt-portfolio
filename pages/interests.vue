<template>
  <div class="relative">
    <page-header
      title="Field of Interests"
      description="I like to learn about different fields and explore how their integration helps create innovative solutions."
    ></page-header>

    <div class="flex-grow min-h-screen px-4 md:px-10 py-10 bg-white-100">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="interest in interests"
          :key="`${interest.id}-interest`"
          class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-gray-100 overflow-hidden flex flex-col"
        >
          <!-- Visual Gradient Hero Banner -->
          <div
            class="h-44 relative flex items-center justify-center overflow-hidden bg-gradient-to-br"
            :class="interest.gradient || 'from-blue-500 to-indigo-600'"
          >
            <!-- Decorative Subtle Circles -->
            <div class="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10 blur-xs pointer-events-none"></div>
            <div class="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-black/10 blur-xs pointer-events-none"></div>

            <!-- Category Pill -->
            <span
              v-if="interest.category"
              class="absolute top-3.5 right-3.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/25 text-white backdrop-blur-xs shadow-xs"
            >
              {{ interest.category }}
            </span>

            <!-- Floating Center Icon Badge -->
            <div class="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
              <!-- Machine Learning Icon -->
              <svg
                v-if="interest.icon === 'ml'"
                class="w-10 h-10 text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <circle cx="6" cy="6" r="2.5" fill="currentColor" fill-opacity="0.2" />
                <circle cx="6" cy="18" r="2.5" fill="currentColor" fill-opacity="0.2" />
                <circle cx="18" cy="6" r="2.5" fill="currentColor" fill-opacity="0.2" />
                <circle cx="18" cy="18" r="2.5" fill="currentColor" fill-opacity="0.2" />
                <circle cx="12" cy="12" r="3" fill="currentColor" fill-opacity="0.3" />
                <line x1="8.2" y1="7.2" x2="9.8" y2="10.8" stroke-linecap="round" />
                <line x1="8.2" y1="16.8" x2="9.8" y2="13.2" stroke-linecap="round" />
                <line x1="15.8" y1="7.2" x2="14.2" y2="10.8" stroke-linecap="round" />
                <line x1="15.8" y1="16.8" x2="14.2" y2="13.2" stroke-linecap="round" />
                <line x1="8.5" y1="6" x2="15.5" y2="6" stroke-dasharray="2 2" />
                <line x1="8.5" y1="18" x2="15.5" y2="18" stroke-dasharray="2 2" />
              </svg>

              <!-- Cross Platform Mobile & Web Icon -->
              <svg
                v-else-if="interest.icon === 'mobile'"
                class="w-10 h-10 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect x="3" y="3" width="11" height="18" rx="2" fill="currentColor" fill-opacity="0.1" />
                <rect x="10" y="7" width="11" height="14" rx="2" fill="currentColor" fill-opacity="0.2" />
                <line x1="7" y1="18" x2="10" y2="18" stroke-linecap="round" stroke-width="2" />
                <line x1="14" y1="18" x2="17" y2="18" stroke-linecap="round" stroke-width="2" />
              </svg>

              <!-- Internet of Things Icon -->
              <svg
                v-else-if="interest.icon === 'iot'"
                class="w-10 h-10 text-emerald-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor" fill-opacity="0.15" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                <path stroke-linecap="round" d="M3 3a13 13 0 0118 0M21 21a13 13 0 01-18 0" stroke-dasharray="2 2" />
              </svg>

              <!-- Open Source Icon -->
              <svg
                v-else-if="interest.icon === 'oss'"
                class="w-10 h-10 text-amber-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3a8 8 0 00-6.8 12.2l3.4-3.4A4 4 0 1115.4 11.8l3.4 3.4A8 8 0 0012 3z" fill="currentColor" fill-opacity="0.2" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v9M8.6 11.8L5.2 15.2M15.4 11.8l3.4 3.4" />
              </svg>

              <!-- DevOps Icon -->
              <svg
                v-else-if="interest.icon === 'devops'"
                class="w-10 h-10 text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.178 8c5.096 0 5.096 8 0 8-2.548 0-4.084-2.457-6.178-5-2.094-2.543-3.63-5-6.178-5-5.096 0-5.096 8 0 8 2.548 0 4.084-2.457 6.178-5 2.094-2.543 3.63-5 6.178-5z" fill="currentColor" fill-opacity="0.15" />
                <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                <circle cx="18" cy="12" r="1.5" fill="currentColor" />
              </svg>

              <!-- Entrepreneurship / Rocket Icon -->
              <svg
                v-else
                class="w-10 h-10 text-rose-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7a3 3 0 114.243-4.243 3 3 0 01-4.243 4.243z" fill="currentColor" fill-opacity="0.15" />
              </svg>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
              {{ interest.name }}
            </h3>

            <p class="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
              {{ interest.brief }}
            </p>

            <!-- Tags -->
            <div v-if="interest.tags && interest.tags.length" class="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
              <span
                v-for="tag in interest.tags"
                :key="tag"
                class="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-50 text-gray-600 border border-gray-100"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    interests() {
      return this.$store.getters['interests/getInterests']
    }
  }
}
</script>
