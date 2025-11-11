<script setup lang="ts">
import styles from './styles'

defineProps<{ socials: Contact[] }>()
</script>

<template>
  <div :class="styles().section()">
    <SharedSocialItem
      v-for="social in socials"
      :key="social.label"
      :item="social"
    />
  </div>
</template>

<style scoped>

</style>
