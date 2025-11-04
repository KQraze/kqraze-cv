<script setup lang="ts">
const { data: projects } = useProjects()
</script>

<template>
  <div class="flex-1">
    <RendererWrapper>
      <div>
        <ProseH1>Моё портфолио</ProseH1>
      </div>
    </RendererWrapper>
    <RendererWrapper>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UCard
          v-for="project in projects"
          :key="project.id"
          :ui="{ body: 'flex flex-col gap-2' }"
        >
          <ULink
            as="h3"
            :to="project.path"
            class="font-bold text-xl"
          >
            {{ project.title }}
          </ULink>
          <div>
            {{ project.period }}
          </div>
          <div class="flex gap-2 flex-wrap">
            <UBadge
              v-for="(tech, i) in project.technologies.slice(0, 3)"
              :key="tech"
              :leading-icon="i <= 1 ? 'logos:nuxt-icon' : 'logos:typescript-icon'"
              variant="outline"
              color="neutral"
              size="md"
            >
              {{ tech }}
            </UBadge>
            <UBadge
              variant="outline"
              color="neutral"
              size="md"
            >
              +2
            </UBadge>
          </div>
          <p class="line-clamp-2 text-base">
            {{ project.description }}
          </p>
        </UCard>
      </section>
    </RendererWrapper>
  </div>
</template>
