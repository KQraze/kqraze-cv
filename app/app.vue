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

const description = 'Павел Елисеев - Fullstack разработчик, Vue 3, Nuxt 3, React, TypeScript, Laravel. Создаю современные веб-приложения с использованием актуального стека технологий. Опыт работы 2+ года.'

const getOgImage = () => {
  if (import.meta.server) {
    const url = useRequestURL()
    return `${url.protocol}//${url.host}/images/avatar.png`
  }
  return '/images/avatar.png'
}

const ogImage = getOgImage()

useSeoMeta({
  description,
  ogTitle: 'Павел Елисеев - CV',
  ogDescription: description,
  ogImage,
  twitterImage: ogImage,
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
