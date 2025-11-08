<script setup lang="ts">
const { data: projects } = useProjects()

useSeoMeta({
  title: 'Моё портфолио'
})
</script>

<template>
  <div class="flex-1">
    <ProseH1>Моё портфолио</ProseH1>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.path"
        :item="project"
      />
    </section>
  </div>
</template>
