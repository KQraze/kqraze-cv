import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'flex items-start lg:gap-4 md:gap-3 gap-2 w-full',
    iconWrapper: 'flex-shrink-0 lg:w-10 md:w-9 w-8 lg:h-10 md:h-9 h-8 lg:rounded-xl md:rounded-lg rounded-md bg-primary-900 dark:bg-primary-900 flex items-center justify-center',
    icon: 'lg:w-5 md:w-4.5 w-4 lg:h-5 md:h-4.5 h-4 text-gray-700 dark:text-gray-300',
    content: 'flex flex-col gap-0.5 min-w-0 flex-1',
    label: 'lg:text-xs text-[0.66rem] font-medium text-gray-500 dark:text-gray-400 tracking-wide',
    value: 'lg:text-sm text-xs font-medium text-gray-900 dark:text-white break-words leading-relaxed truncate'
  },
  variants: {
    clickable: {
      true: {
        value: 'text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary transition-colors cursor-pointer'
      }
    }
  }
})
