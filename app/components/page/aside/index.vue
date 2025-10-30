<script setup lang="ts">
import styles from './styles'

const contactInfo = [
  {
    icon: 'i-heroicons-envelope',
    label: 'Email',
    value: 'pavel.eliseev061@gmail.com',
    href: 'mailto:pavel.eliseev061@gmail.com'
  },
  {
    icon: 'i-heroicons-phone',
    label: 'Телефон',
    value: '+7 (913) 437-51-17',
    href: 'tel:+79134375117'
  },
  {
    icon: 'i-heroicons-map-pin',
    label: 'Адрес',
    value: 'Томск, Россия'
  }
]

const socialLinks = [
  {
    icon: 'i-simple-icons-github',
    label: 'Github',
    value: 'https://github.com/KQraze',
    href: 'https://github.com/KQraze'
  }
]

const languages = [
  {
    flag: 'i-twemoji-flag-russia',
    name: 'Русский',
    level: 'Родной'
  },
  {
    flag: 'i-twemoji-flag-united-kingdom',
    name: 'Английский',
    level: 'B1 - средний'
  }
]
</script>

<template>
  <UPageAside :ui="{ root: styles().base() }">
    <div :class="styles().container()">
      <NuxtImg
        src="/avatar.png"
        :class="styles().image()"
        alt="Аватар Павла Елисеева"
      />
      <h2 :class="styles().title()">
        Павел Елисеев
      </h2>
      <h3 :class="styles().subtitle()">
        Full Stack Developer
      </h3>

      <USeparator :class="styles().separator()" />

      <div :class="styles().section()">
        <div
          v-for="contact in contactInfo"
          :key="contact.label"
          :class="styles().infoItem()"
        >
          <div :class="styles().iconWrapper()">
            <UIcon
              :name="contact.icon"
              :class="styles().icon()"
            />
          </div>
          <div :class="styles().infoContent()">
            <p :class="styles().infoLabel()">
              {{ contact.label }}
            </p>
            <ULink
              v-if="contact.href"
              :to="contact.href"
              :class="styles().infoValue({ clickable: true })"
              target="_blank"
            >
              {{ contact.value }}
            </ULink>
            <p
              v-else
              :class="styles().infoValue()"
            >
              {{ contact.value }}
            </p>
          </div>
        </div>
      </div>

      <USeparator :class="styles().separator()" />

      <div :class="styles().section()">
        <div
          v-for="social in socialLinks"
          :key="social.label"
          :class="styles().infoItem()"
        >
          <div :class="styles().iconWrapper()">
            <UIcon
              :name="social.icon"
              :class="styles().icon()"
            />
          </div>
          <div :class="styles().infoContent()">
            <p :class="styles().infoLabel()">
              {{ social.label }}
            </p>
            <ULink
              :to="social.href"
              :class="styles().infoValue({ clickable: true })"
              target="_blank"
            >
              {{ social.value }}
            </ULink>
          </div>
        </div>
      </div>

      <USeparator :class="styles().separator()" />

      <div :class="styles().section()">
        <h4 :class="styles().sectionTitle()">
          Языки
        </h4>
        <div
          v-for="lang in languages"
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
