export const META_QUERY_KEYS = {
  all: ['all'] as const,
  home: () => [...META_QUERY_KEYS.all, 'home'] as const,
  about: () => [...META_QUERY_KEYS.all, 'about'] as const
}

export const useHomePage = defineQuery({
  key: META_QUERY_KEYS.home(),
  query: metaService.getHomePage
})

export const useAbout = defineQuery({
  key: META_QUERY_KEYS.about(),
  query: metaService.getAbout
})
