import type { z } from 'zod'
import type { contactSchema } from '../content/meta'
import type { projectSchema } from '../content/project'

export type Contact = z.infer<typeof contactSchema>
export type Project = z.infer<typeof projectSchema>
