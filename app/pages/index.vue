<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
</script>

<template>
  <div>
    <RendererWrapper :value="home" />
  </div>
</template>

<style scoped>

</style>
