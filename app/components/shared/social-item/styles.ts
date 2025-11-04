import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'flex items-start gap-4 w-full',
    iconWrapper: 'flex-shrink-0 w-10 h-10 rounded-xl bg-primary-900 dark:bg-primary-900 flex items-center justify-center',
    icon: 'w-5 h-5 text-gray-700 dark:text-gray-300',
    content: 'flex flex-col gap-0.5 min-w-0 flex-1',
    label: 'text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide',
    value: 'text-sm font-medium text-gray-900 dark:text-white break-words leading-relaxed truncate'
  },
  variants: {
    clickable: {
      true: {
        value: 'text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary transition-colors cursor-pointer'
      }
    }
  }
})
