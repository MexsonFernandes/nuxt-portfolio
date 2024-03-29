require('dotenv').config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mexson Fernandes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  env: {
    base: process.env.REST_API_ENDPOINT || 'https://manage.mexsonfernandes.com',
    token: process.env.REST_API_TOKEN
  },

  modules: ['@nuxtjs/sitemap', 'nuxt-umami'],

  sitemap: {
    hostname: 'https://mexsonfernandes.com',
    gzip: true, 
  },

  umami: {
    autoTrack: true,
    doNotTrack: false,
    cache: false,
    domains: 'mexsonfernandes.com',
    websiteId: 'a8799e7d-0c96-4bcd-879a-7c6d0c58c001',
    scriptUrl: 'https://analytics.robomx.com/umami.js',
  },
  generate: {
    fallback: true
  }
}
