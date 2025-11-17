// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@pinia/colada-nuxt',
    '@pinia/nuxt',
    '@nuxtjs/sitemap'
  ],

  imports: {
    dirs: [
      '~/queries/**',
      '~/services/**'
    ]
  },

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: [
        'primary',
        'accent',
        'dark',
        'success',
        'warning',
        'error'
      ]
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    domains: ['kqraze-cv.vercel.app']
  },

  sitemap: {
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date() },
      { loc: '/projects', changefreq: 'weekly', priority: 0.9, lastmod: new Date() }
    ]
  }
})
//      "@vue/devtools-api": "^8.0.3",
//      "@vue/devtools-kit": "^8.0.3",
