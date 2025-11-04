import { z } from 'zod'

export const projectSchema = z.object({
  title: z.string(),
  company: z.string().optional(),
  location: z.string().optional(),
  website: z.string().optional(),
  period: z.string(),
  position: z.string(),
  description: z.string().optional(),
  technologies: z.array(z.string()),
  responsibilities: z.array(z.string()),
  featured: z.boolean().default(false),
  order: z.number().optional()
})
