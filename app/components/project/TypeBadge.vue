<script setup lang="ts">
const props = defineProps<{ type: ProjectType }>()

const variant = computed(() => {
  switch (props.type) {
    case ProjectType.FREELANCE:
      return ['text-success', 'Фриланс']
    case ProjectType.COMMERCIAL:
      return ['text-primary', 'Коммерческий']
    case ProjectType.PET_PROJECT:
      return ['text-accent', 'Пет-проект']
    default:
      return ['text-neutral', 'Неизвестно']
  }
})
</script>

<template>
  <UBadge
    variant="subtle"
    color="neutral"
    :class="variant[0]"
  >
    {{ variant[1] }}
  </UBadge>
</template>

<style scoped>

</style>
