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
    enabled: true
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

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  sitemap: {
    sitemaps: {
      pages: {
        urls: () => {
          return [
            { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date() },
            { url: '/projects', changefreq: 'weekly', priority: 0.9, lastmod: new Date() }
          ]
        }
      }
    }
  }
})
