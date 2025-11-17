import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    card: '',
    typeBadge: 'absolute top-4 left-4 z-10',
    imageLink: 'text-white hover:text-primary',
    image: 'aspect-video object-cover w-full hover:scale-110 transition-[scale] duration-300',
    title: 'lg:mt-0 md:mt-0 mt-0 lg:mb-0 md:mb-0 mb-0',
    titleLink: 'text-white hover:text-primary',
    period: '',
    technologiesWrapper: 'flex gap-2 flex-wrap',
    description: 'lg:text-base text-sm line-clamp-2 text-gray-300',
    footerLink: 'font-medium lg:text-base text-sm'
  }
})
