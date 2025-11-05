import { defineCollection } from '@nuxt/content'
import { projectSchema } from './schemes'

export const projectCollection = defineCollection({
  type: 'page',
  source: 'projects/*.md',
  schema: projectSchema
})
