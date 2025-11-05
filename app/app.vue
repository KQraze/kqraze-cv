<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  titleTemplate: titleChunk => titleChunk ? `Павел Елисеев - ${titleChunk}` : 'Павел Елисеев - CV',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})

const description = 'Pavel Eliseev CV, Full Stack Developer, JavaScript, Vue.js, Nuxt.js, Node.js, Portfolio'

useSeoMeta({
  description,
  ogTitle: 'Павел Елисеев - CV',
  ogDescription: description,
  ogImage: '/images/avatar.png',
  twitterImage: '/images/avatar.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UPage class="lg:gap-0 flex flex-row">
      <template #left>
        <PageAside />
      </template>
      <template #default>
        <div class="flex flex-col relative">
          <PageHeader />
          <UPageSection
            as="main"
            :ui="{ container: 'lg:py-16' }"
          >
            <NuxtPage />
          </UPageSection>
        </div>
      </template>
    </UPage>
    <Analytics />
  </UApp>
</template>
