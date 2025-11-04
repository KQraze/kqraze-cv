<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Обо мне',
    to: '/',
    active: route.name === 'index'
  },
  {
    label: 'Моё портфолио',
    to: '/projects',
    active: route.name === 'projects'
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
