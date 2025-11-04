export const PROJECT_QUERY_KEYS = {
  all: ['all'] as const,
  list: () => [...PROJECT_QUERY_KEYS.all, 'list'] as const,
  detail: (slug: string) => [...PROJECT_QUERY_KEYS.list(), 'detail', slug] as const
}

export const useProjects = defineQuery({
  key: PROJECT_QUERY_KEYS.all,
  query: projectService.getAll
})

export const useProjectBySlug = defineQuery(() => {
  const route = useRoute()

  return useQuery({
    key: () => PROJECT_QUERY_KEYS.detail(route.params.slug as string),
    query: () => projectService.getBySlug(route.params.slug as string)
  })
})
