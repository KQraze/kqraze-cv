<script setup lang="ts">
useHead({
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

const title = 'Павел Елисеев - CV'
const description = 'Pavel Eliseev CV, Full Stack Developer, JavaScript, Vue.js, Nuxt.js, Node.js, Portfolio'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/avatar.png',
  twitterImage: '/avatar.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UPage class="lg:gap-0">
      <template #left>
        <PageAside />
      </template>
      <template #default>
        <div class="flex flex-col relative">
          <PageHeader />
          <UPageSection :ui="{ container: 'lg:py-16' }">
            <NuxtPage />
          </UPageSection>
        </div>
      </template>
    </UPage>
  </UApp>
</template>
