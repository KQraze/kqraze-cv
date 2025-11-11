<script setup lang="ts">
const { data: home } = useHomePage()
const { data } = useAbout()

useSeoMeta({
  title: () => home.value?.title ?? 'Обо мне'
})
</script>

<template>
  <div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 lg:hidden mb-8">
      <LazyProfileHeader
        hydrate-on-media-query="(max-width: 1024px)"
      />
      <div class="flex flex-col gap-4">
        <LazyPageAsideContacts
          :contacts="data?.contacts ?? []"
          hydrate-on-media-query="(max-width: 1024px)"
        />
        <USeparator />
        <LazyPageAsideSocials
          :socials="data?.socials ?? []"
          hydrate-on-media-query="(max-width: 1024px)"
        />
      </div>
    </div>
    <USeparator class="mb-8 lg:hidden" />
    <ContentRenderer
      v-if="home"
      :value="home"
    />
  </div>
</template>

<style scoped></style>
