<script setup lang="ts">
import styles from './styles'

const { data } = useAbout()
</script>

<template>
  <UPageAside :ui="{ root: styles().base() }">
    <div :class="styles().container()">
      <NuxtImg
        src="/images/avatar.png"
        :class="styles().image()"
        alt="Аватар"
      />
      <h2 :class="styles().title()">
        Павел Елисеев
      </h2>
      <h3 :class="styles().subtitle()">
        Fullstack Developer
      </h3>
      <USeparator :class="styles().separator()" />

      <div :class="styles().section()">
        <SharedSocialItem
          v-for="contact in data?.contacts"
          :key="contact.label"
          :item="contact"
        />
      </div>

      <USeparator :class="styles().separator()" />

      <div :class="styles().section()">
        <SharedSocialItem
          v-for="social in data?.socials"
          :key="social.label"
          :item="social"
        />
      </div>

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
