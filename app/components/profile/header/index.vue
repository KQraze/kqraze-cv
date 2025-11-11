<script setup lang="ts">
import styles from './styles'
</script>

<template>
  <div>
    <NuxtImg
      src="/images/avatar.png"
      :class="styles().image()"
      alt="Аватар"
    />
    <ProseH2 :class="styles().title()">
      Павел Елисеев
    </ProseH2>
    <ProseH3 :class="styles().subtitle()">
      Fullstack Developer
    </ProseH3>
  </div>
</template>

<style scoped>

</style>
