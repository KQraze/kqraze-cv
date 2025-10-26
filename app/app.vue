<script setup>
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
  ogImage: '',
  twitterImage: '',
  twitterCard: ''
})
</script>

<template>
  <UApp>
    <UHeader title="Павел Елисеев">
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>

    </UFooter>
  </UApp>
</template>
