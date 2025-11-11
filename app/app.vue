<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

useHead({
  titleTemplate: titleChunk => titleChunk ? `Павел Елисеев - ${titleChunk}` : 'Павел Елисеев - CV',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'google-site-verification', content: 'yw3Am-4d6M9_nW0VPOnCH9hLkavt32VohY_XFg1c-DE' },
    { name: 'yandex-verification', content: '60e49dbfccb4f161' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ru'
  },
  noscript: [
    {
      innerHTML: '<img src="https://mc.yandex.ru/watch/105130603" style="position:absolute; left:-9999px;" alt="" />'
    }
  ]
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
    <UBanner
      color="primary"
      close
      title="Информация и дизайн сайта в доработке."
    />
    <UPage
      class="lg:gap-0 flex flex-row"
      :ui="{ center: 'min-w-full flex flex-col relative' }"
    >
      <template #left>
        <PageAside />
      </template>
      <template #default>
        <PageHeader />
        <UPageSection
          as="main"
          :ui="{ container: 'lg:py-16 md:py-12 sm:py-10 py-8' }"
        >
          <NuxtPage />
        </UPageSection>
      </template>
    </UPage>
    <Analytics />
    <SpeedInsights />
  </UApp>
</template>
