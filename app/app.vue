<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

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

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Обо мне',
    to: '/',
    active: route.path.startsWith('/')
  },
  {
    label: 'Моё портфолио',
    to: '/',
    active: route.path.startsWith('/portfolio')
  }
])

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
        <UPageAside :ui="{ root: 'border-r border-r-neutral' }">
          <div class="flex flex-col items-center">
            <NuxtImg
              src="/avatar.png"
              class="mx-auto rounded-full overflow-hidden border-4 border-primary-700"
              alt="Аватар Павла Елисеева"
            />
            <h2 class="text-center mt-4 text-2xl font-semibold">
              Павел Елисеев
            </h2>
            <p class="text-center text-lg bg-gradient-to-l from-primary to-primary-500 bg-clip-text text-transparent">
              Full Stack Developer
            </p>
          </div>
        </UPageAside>
      </template>
      <template #default>
        <div class="flex flex-col relative">
          <header class="sticky top-0 w-full z-10 border-b border-b-neutral backdrop-blur-md py-2 flex justify-center">
            <UNavigationMenu
              :items="items"
            />
          </header>
          <UPageSection :ui="{ container: 'lg:py-16' }">
            <NuxtPage />
          </UPageSection>
        </div>
      </template>
    </UPage>
  </UApp>
</template>
