import { defineContentConfig } from '@nuxt/content'
import { aboutCollection, homeCollection } from './shared/content/meta'
import { projectsCollection } from './shared/content/project'

export default defineContentConfig({
  collections: {
    home: homeCollection,
    about: aboutCollection,
    projects: projectsCollection
  }
})
