<script setup lang="ts">
const { data } = useProjectBySlug()
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
