<script setup lang="ts">
const { data: home } = useHomePage()

useSeoMeta({
  title: () => home.value?.title ?? 'Обо мне'
})
</script>

<template>
  <ContentRenderer
    v-if="home"
    :value="home"
  />
</template>

<style scoped></style>
