<script setup lang="ts">
const {data: projects, isPending} = useProjects()

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
      <template v-if="isPending">
        <USkeleton
          v-for="i in 10"
          :key="i"
          class="w-full h-160"
        />
      </template>
    </section>
  </div>
</template>
