export const projectService = {
  getAll: () => queryCollection('projects').order('order', 'ASC').all(),
  getBySlug: (slug: string) => queryCollection('projects').path(`/projects/${slug}`).first()
}
