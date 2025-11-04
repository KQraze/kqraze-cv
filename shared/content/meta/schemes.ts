import { z } from 'zod'

export const contactSchema = z.object({
  icon: z.string(),
  label: z.string(),
  value: z.string(),
  href: z.string().optional()
})

export const contactListSchema = z.array(contactSchema)

export const languageSchema = z.array(z.object({
  flag: z.string(),
  name: z.string(),
  level: z.string()
}))

export const homePageSchema = z.object({
  title: z.string().default('About Me'),
  description: z.string().default('Learn more about me')
})

export const aboutDataSchema = z.object({
  contacts: contactListSchema,
  socials: contactListSchema,
  languages: languageSchema
})
