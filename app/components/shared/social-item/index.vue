<script setup lang="ts">
import styles from './styles'
import { ULink } from '#components'

interface Props {
  item: Contact
}

defineProps<Props>()
</script>

<template>
  <div
    :class="styles().root()"
  >
    <div :class="styles().iconWrapper()">
      <UIcon
        :name="item.icon"
        :class="styles().icon()"
      />
    </div>
    <div :class="styles().content()">
      <p :class="styles().label()">
        {{ item.label }}
      </p>
      <component
        :is="item.href ? ULink : 'p'"
        v-bind="{ ...(item?.href && { target: '_blank', to: item.href }) }"
        :class="styles().value({ clickable: !!item.href })"
      >
        {{ item.value }}
      </component>
    </div>
  </div>
</template>
