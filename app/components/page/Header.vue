<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

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
</script>

<template>
  <header class="sticky top-0 w-full z-10 border-b border-b-neutral backdrop-blur-md py-2 flex justify-center">
    <UNavigationMenu
      :items="items"
    />
  </header>
</template>

<style scoped>

</style>
