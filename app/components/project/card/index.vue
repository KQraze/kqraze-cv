<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'
import styles from './styles'

interface Props {
  item: ProjectsCollectionItem
}

defineProps<Props>()

const splitTechnology = (technology: string) => {
  return technology.split('|')
}

const s = styles()
</script>

<template>
  <UCard
    :class="s.card()"
    :ui="{ header: 'p-0 sm:p-0 relative overflow-hidden', body: 'flex flex-col gap-2', footer: 'flex justify-end' }"
  >
    <template #header>
      <ProjectTypeBadge
        :type="item.type as ProjectType"
        :class="s.typeBadge()"
      />
      <ULink
        :to="item.path"
        :class="s.imageLink()"
      >
        <ProseImg
          v-if="item.preview"
          :src="item.preview"
          :alt="item.title"
          :zoom="false"
          :class="s.image()"
        />
      </ULink>
    </template>
    <ProseH3 :class="s.title()">
      <ULink
        :to="item.path"
        :class="s.titleLink()"
      >
        {{ item.title }}
      </ULink>
    </ProseH3>
    <ProseP :class="s.period()">
      {{ item.period }}
    </ProseP>
    <div :class="s.technologiesWrapper()">
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
    <p :class="s.description()">
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
        :class="s.footerLink()"
      >
        Посетить сайт <UIcon name="heroicons:arrow-up-right-16-solid" />
      </ULink>
    </template>
  </UCard>
</template>
