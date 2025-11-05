<script setup lang="ts">
const { data: home } = useHomePage()

useSeoMeta({
  title: () => home.value?.title ?? 'Обо мне'
})
</script>

<template>
  <RendererWrapper>
    <ContentRenderer
      v-if="home"
      :value="home"
    />
  </RendererWrapper>
</template>

<style scoped>

</style>
