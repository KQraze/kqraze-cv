<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

interface Props {
  item: ProjectsCollectionItem
}

defineProps<Props>()

const splitTechnology = (technology: string) => {
  return technology.split('|')
}
</script>

<template>
  <UCard
    :ui="{ header: 'p-0 sm:p-0 relative', body: 'flex flex-col gap-2' }"
  >
    <template #header>
      <ProjectTypeBadge
        :type="item.type as ProjectType"
        class="absolute top-4 left-4"
      />
      <NuxtImg
        v-slot="{ isLoaded, src, ...attrs }"
        :src="item.preview"
        :alt="item.title"
        class="aspect-video object-cover w-full"
      >
        <img
          v-if="isLoaded"
          :src="src"
          v-bind="attrs"
        >
        <div
          v-else
          class="aspect-video w-full from-primary-900 to-primary-700"
        />
      </NuxtImg>
    </template>
    <h3>
      <ULink
        :to="item.path"
        class="font-bold text-xl"
      >
        {{ item.title }}
      </ULink>
    </h3>
    <div>
      {{ item.period }}
    </div>
    <div class="flex gap-2 flex-wrap">
      <UBadge
        v-for="tech in item.technologies"
        :key="tech"
        :leading-icon="splitTechnology(tech)[0] === 'none' ? undefined : splitTechnology(tech)[0]"
        variant="subtle"
        color="neutral"
        size="md"
      >
        {{ splitTechnology(tech)[1] }}
      </UBadge>
    </div>
    <p class="line-clamp-2 text-base">
      {{ item.description }}
    </p>
  </UCard>
</template>
