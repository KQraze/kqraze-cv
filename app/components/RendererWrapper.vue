<script setup lang="ts">
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

  const elements = contentRef.value.querySelectorAll('.content-renderer > * > *')

  console.log(elements)

  elements.forEach((el) => {
    el.classList.add('fade-in');
    (el as HTMLElement).style.transitionDelay = `0.1s`
    observer.observe(el)
  })

  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <div
    ref="contentRef"
    class="content-renderer"
  >
    <slot />
  </div>
</template>

<style scoped>
:deep(.fade-in) {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
  transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.fade-in.visible) {
  opacity: 1;
  transform: translateY(0);
}
</style>
