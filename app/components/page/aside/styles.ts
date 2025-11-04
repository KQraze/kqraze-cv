import { tv } from '#ui/utils/tv'

export default tv({
  base: 'border-r border-r-neutral',
  slots: {
    container: 'flex flex-col items-center w-full px-6 py-8',
    image: 'mx-auto max-w-50 aspect-square rounded-full overflow-hidden border-4 border-primary-500',
    title: 'text-center mt-6 text-2xl font-bold text-gray-900 dark:text-white',
    subtitle: 'text-center mt-2 text-base bg-gradient-to-r from-primary to-primary-500 bg-clip-text text-transparent font-medium',
    separator: 'my-6 w-full',
    section: 'w-full flex flex-col gap-5',
    sectionTitle: 'text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wide mb-1',
    icon: 'w-5 h-5 text-gray-700 dark:text-gray-300',
    languageItem: 'flex items-center gap-4 w-full',
    flag: 'text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center',
    languageContent: 'flex flex-col gap-0.5',
    languageName: 'text-sm font-semibold text-gray-900 dark:text-white',
    languageLevel: 'text-xs text-gray-500 dark:text-gray-400'
  }
})
