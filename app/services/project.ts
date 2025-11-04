export const projectService = {
  getAll: () => queryCollection('projects').all(),
  getBySlug: (slug: string) => queryCollection('projects').path(`/projects/${slug}`).first()
}
