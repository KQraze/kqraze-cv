<script setup lang="ts">
import { tv } from 'tailwind-variants'

interface Technology {
  name: string
  icon: string
  color: 'error' | 'primary' | 'accent' | 'dark' | 'success' | 'warning' | 'neutral'
}

interface Props {
  items: Technology[]
  minify?: boolean
}

defineProps<Props>()

const styles = tv({
  slots: {
    root: 'flex flex-wrap gap-4 max-sm:justify-center lg:my-6 my-4',
    badge: 'flex flex-col justify-center w-22 aspect-square gap-2 truncate',
    badgeIcon: 'w-12 h-12',
    label: 'text-base'
  },
  variants: {
    minify: {
      true: {
        root: 'gap-2',
        badge: 'w-18 gap-1 text-xs',
        badgeIcon: 'w-10 h-10',
        label: 'text-xs'
      }
    }
  }
})
</script>

<template>
  <div :class="styles().root({ minify })">
    <UBadge
      v-for="(item, i) in items"
      :key="i"
      class=""
      :color="item.color"
      variant="subtle"
      :leading-icon="item.icon"
      :ui="{ base: styles().badge({ minify }), leadingIcon: styles().badgeIcon({ minify }), label: styles().label({ minify }) }"
    >
      {{ item.name }}
    </UBadge>
  </div>
</template>

<style scoped>

</style>
