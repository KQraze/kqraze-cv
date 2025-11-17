<script setup lang="ts">
import styles from './styles'

const s = styles()
</script>

<template>
  <UCard
    :class="s.card()"
    :ui="{ header: 'p-0 sm:p-0 relative overflow-hidden', body: 'flex flex-col gap-2', footer: 'flex justify-end' }"
  >
    <template #header>
      <!-- Скелетон изображения -->
      <USkeleton class="aspect-video min-w-full" />
      <!-- Скелетон бейджа типа проекта -->
      <USkeleton
        :class="s.typeBadge()"
        class="w-24 h-6 rounded-md"
      />
    </template>

    <!-- Скелетон заголовка -->
    <USkeleton
      :class="s.title()"
      class="h-7 w-3/4 rounded-md"
    />

    <!-- Скелетон периода -->
    <USkeleton
      :class="s.period()"
      class="h-5 w-1/2 rounded-md"
    />

    <!-- Скелетон технологий -->
    <div :class="s.technologiesWrapper()">
      <USkeleton
        v-for="i in 4"
        :key="i"
        class="h-6 rounded-md"
        :class="i === 1 ? 'w-16' : i === 2 ? 'w-20' : i === 3 ? 'w-24' : 'w-18'"
      />
    </div>

    <!-- Скелетон описания -->
    <div class="flex flex-col gap-2">
      <USkeleton
        :class="s.description()"
        class="h-4 w-full rounded-md"
      />
      <USkeleton
        :class="s.description()"
        class="h-4 w-5/6 rounded-md"
      />
    </div>

    <!-- Скелетон футера (ссылка на сайт) -->
    <template #footer>
      <USkeleton
        :class="s.footerLink()"
        class="h-5 w-32 rounded-md"
      />
    </template>
  </UCard>
</template>
