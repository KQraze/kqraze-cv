<script setup lang="ts">
const { data } = useProjectBySlug()

useSeoMeta({
  title: data.value?.title ?? 'Проект'
})
</script>

<template>
  <RendererWrapper>
    <ContentRenderer
      v-if="data"
      :value="data"
    />
  </RendererWrapper>
</template>

<style scoped>

</style>
