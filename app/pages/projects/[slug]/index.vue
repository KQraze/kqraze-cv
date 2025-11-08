<script setup lang="ts">
const { data } = useProjectBySlug()

useSeoMeta({
  title: () => data.value?.title ?? 'Проект'
})
</script>

<template>
  <ContentRenderer
    v-if="data"
    :value="data"
  />
</template>

<style scoped>

</style>
