import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    image: 'mx-auto max-w-50 aspect-square rounded-full overflow-hidden border-4 border-primary-500',
    title: 'text-center lg:mt-6 md:mt-4 mt-2 lg:mb-0 md:mb-2 sm:mb-0 mb-0 font-bold text-gray-900 dark:text-white',
    subtitle: 'text-center lg:mt-2 md:mt-0 sm:mt-0 mt-0 lg:text-base bg-gradient-to-r from-primary to-primary-500 bg-clip-text text-transparent font-medium'
  }
})
