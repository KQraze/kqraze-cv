<script setup lang="ts">
interface Props {
  value: unknown
}

defineProps<Props>()

const contentRef = useTemplateRef('contentRef')

onMounted(() => {
  if (!contentRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry =>
        entry.isIntersecting && entry.target.classList.add('visible')
      )
    },
    {
      rootMargin: '0px 0px -20px 0px',
      threshold: 0.1
    }
  )

  // Наблюдаем за всеми элементами контента
  const elements = contentRef.value.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul, ol, li, pre, table, blockquote, hr')

  elements.forEach((el) => {
    el.classList.add('fade-in');
    (el as HTMLElement).style.transitionDelay = `0.05s`
    observer.observe(el)
  })

  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <div
    ref="contentRef"
  >
    <ContentRenderer
      v-if="value"
      :value="value"
    />
  </div>
</template>

<style scoped>
:deep(.fade-in) {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.fade-in.visible) {
  opacity: 1;
  transform: translateY(0);
}
</style>
