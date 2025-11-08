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
    :ui="{ header: 'p-0 sm:p-0 relative overflow-hidden', body: 'flex flex-col gap-2', footer: 'flex justify-end' }"
  >
    <template #header>
      <ProjectTypeBadge
        :type="item.type as ProjectType"
        class="absolute top-4 left-4"
      />
      <ProseImg
        v-if="item.preview"
        :src="item.preview"
        :alt="item.title"
        class="aspect-video object-cover w-full hover:scale-110 transition-[scale] duration-300"
      />
    </template>
    <ProseH3
      class="lg:mt-0 md:mt-0 mt-0 lg:mb-0 md:mb-0 mb-0"
    >
      <ULink
        :to="item.path"
        class="text-white hover:text-primary"
      >
        {{ item.title }}
      </ULink>
    </ProseH3>
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
    <p class="line-clamp-2 text-gray-300">
      {{ item.description }}
    </p>
    <template
      v-if="item.website"
      #footer
    >
      <ULink
        v-if="item.website"
        :to="item.website"
        target="_blank"
        class="font-medium"
      >
        Посетить сайт <UIcon name="heroicons:arrow-up-right-16-solid" />
      </ULink>
    </template>
  </UCard>
</template>
