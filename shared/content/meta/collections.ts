import { defineCollection } from '@nuxt/content'
import { homePageSchema, aboutDataSchema } from './schemes'

export const homeCollection = defineCollection({
  source: 'home.md',
  type: 'page',
  schema: homePageSchema
})

export const aboutCollection = defineCollection({
  source: 'about-me.json',
  type: 'data',
  schema: aboutDataSchema
})
