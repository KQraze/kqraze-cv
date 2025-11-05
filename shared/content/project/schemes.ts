import { z } from 'zod'
import { ProjectType } from '../../types'

export const projectSchema = z.object({
  preview: z.string().optional(),
  title: z.string(),
  company: z.string().optional(),
  location: z.string().optional(),
  website: z.string().optional(),
  period: z.string(),
  position: z.string(),
  description: z.string().optional(),
  technologies: z.array(z.string()),
  responsibilities: z.array(z.string()),
  type: z.enum(ProjectType),
  order: z.number().optional()
})
