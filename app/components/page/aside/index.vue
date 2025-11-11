<script setup lang="ts">
import styles from './styles'

const { data } = useAbout()
</script>

<template>
  <UPageAside :ui="{ root: styles().base() }">
    <div :class="styles().container()">
      <ProfileHeader />
      <USeparator :class="styles().separator()" />

      <PageAsideContacts :contacts="data?.contacts ?? []" />

      <USeparator :class="styles().separator()" />

      <PageAsideSocials :socials="data?.socials ?? []" />

      <USeparator :class="styles().separator()" />

      <div :class="styles().section()">
        <h4 :class="styles().sectionTitle()">
          Языки
        </h4>
        <div
          v-for="lang in data?.languages"
          :key="lang.name"
          :class="styles().languageItem()"
        >
          <UIcon
            :name="lang.flag"
            :class="styles().icon()"
          />
          <div :class="styles().languageContent()">
            <p :class="styles().languageName()">
              {{ lang.name }}
            </p>
            <p :class="styles().languageLevel()">
              {{ lang.level }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </UPageAside>
</template>
