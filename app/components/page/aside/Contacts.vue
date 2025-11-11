<script setup lang="ts">
import styles from './styles'

defineProps<{ contacts: Contact[] }>()
</script>

<template>
  <div :class="styles().section()">
    <SharedSocialItem
      v-for="contact in contacts"
      :key="contact.label"
      :item="contact"
    />
  </div>
</template>

<style scoped>

</style>
