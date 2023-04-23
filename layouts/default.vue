<template>
  <div class="flex h-screen">
    <div class="hidden w-56 overflow-hidden bg-gray-100 md:block lg-block">
      <div class="flex flex-wrap justify-center p-4">
        <img
          class="object-cover align-middle rounded-full  h-28 w-28 drop-shadow-lg"
          src="~/assets/images/mexson.png"
          alt="Mexson Fernandes"
        />
      </div>
      <ul class="flex flex-col py-4">
        <li v-for="(tab, index) in tabs" :key="`tab-${index}-desktop`">
          <div
          @click="navigateTab(tab.route, tab.external)"
            :target="tab.external? '_blank': '_self'"
            class="cursor-pointer flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform  hover:translate-x-2 hover:text-gray-800"
          >
            <span
              class="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400 "
              ><i class="bx bx-home"></i
            ></span>
            <span class="text-sm font-medium">{{ tab.name }}</span>
          </div>
        </li>
      </ul>

      <div class="grid place-items-center" v-if="prod">
        <vue-markdown :source="hitCounter"> </vue-markdown>
      </div>
    </div>

    <div class="flex flex-1 overflow-hidden">
      <div id="main-item" class="flex-1 overflow-y-scroll">
        <nav class="bg-gray-800 md:invisible">
          <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div
                class="absolute inset-y-0 left-0 flex items-center sm:hidden"
              >
                <!-- Mobile menu button-->
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  @click="toggleMenu()"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    class="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div
                class="absolute inset-y-0 right-0 flex items-center pr-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <div class="relative ml-3">
                  <div>
                    <button
                      type="button"
                      class="flex text-sm bg-gray-800 rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=918007503717&text=Hi Mexson"
                        ><img
                          class="w-8 h-8 rounded-full"
                          src="~/assets/images/mexson.png"
                          alt=""
                        />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="showHideMenu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <div
                v-for="(tab, index) in tabs"
                :key="`tab-${index}-mobile`"
                @click="navigateTab(tab.route, tab.external)"
                :class="`cursor-pointer block px-3 py-2 text-base font-medium text-white  rounded-md ${getActiveTab(
                  index
                )}`"
                @click.prevent="hideMenu()"
                >{{ tab.name }}</div
              >
            </div>
          </div>
        </nav>
        <nuxt class="ml-5" />
      </div>
    </div>
    <div id="goTop">
      <div
        v-if="showGoUpTop"
        class="fixed float-right p-2 text-center bg-gray-200 cursor-pointer  right-5 bottom-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-5 feather feather-chevrons-up"
        >
          <polyline points="17 11 12 6 7 11"></polyline>
          <polyline points="17 18 12 13 7 18"></polyline>
        </svg>
      </div>
    </div>
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
      hitCounter: `[![HitCount](https://api.mexsonfernandes.com/counter)](https://api.mexsonfernandes.com/counter)`,
      tabs: [
        {
          route: '/',
          name: 'About',
        },
        {
          route: '/work',
          name: 'Work',
        },
        {
          route: '/skills',
          name: 'Skills',
        },
        {
          route: '/interests',
          name: 'Interests',
        },
        {
          route: '/resources',
          name: 'Resources',
        },
        {
          route: 'https://blog.mexsonfernandes.com',
          name: 'Blog',
          external: true
        },
      ],
      prod: process.env.NODE_ENV === 'production',
      showHideMenu: false,
      showGoUpTop: false,
    }
  },
  mounted() {
    const mainItem = document.getElementById('main-item')
    mainItem.addEventListener('scroll', () => {
      if (mainItem.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.showGoUpTop = true
      } else {
        this.showGoUpTop = false
      }
    })
    const goTop = document.querySelector('#goTop')
    goTop.addEventListener('click', (e) => {
      e.preventDefault()
      mainItem.scroll({ top: 0, left: 0, behavior: 'smooth' })
    })
  },
  methods: {
    navigateTab(route, external) {
      if (external) {
        window.open(
          route,
          '_blank'
        );
      } else {
        this.$router.push(route)
      }
    },
    toggleMenu() {
      this.showHideMenu = !this.showHideMenu
    },
    getActiveTab(index) {
      if (
        this.tabs[index].route.includes(this.$route.name) ||
        (this.$route.name === 'index' && this.tabs[index].name === 'About')
      )
        return 'bg-blue-900 text-white'
      else return 'text-gray-300 hover:bg-gray-700 hover:text-white'
    },
    hideMenu() {
      this.showHideMenu = false
    },
  },
}
</script>

<style>
/* comfortaa-regular - latin */
@font-face {
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/font/comfortaa-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('../assets/font/comfortaa-v30-latin-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../assets/font/comfortaa-v30-latin-regular.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('../assets/font/comfortaa-v30-latin-regular.woff') format('woff'),
    /* Modern Browsers */ url('../assets/font/comfortaa-v30-latin-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('../assets/font/comfortaa-v30-latin-regular.svg#Comfortaa')
      format('svg'); /* Legacy iOS */
}
</style>
