export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      dark: 'dark',
      accent: 'accent',
      success: 'success',
      warning: 'warning',
      error: 'error',
      neutral: 'neutral'
    },
    prose: {
      h1: {
        slots: {
          base: ['lg:text-4xl md:text-3xl text-2xl', 'lg:mb-8 md:mb-6 mb-4']
        }
      },
      h2: {
        slots: {
          base: ['lg:text-2xl md:text-xl text-lg', 'lg:mt-12 md:mt-10 mt-8', 'lg:mb-6 md:mb-4 mb-2']
        }
      },
      h3: {
        slots: {
          base: ['lg:text-xl md:text-lg text-md', 'lg:mt-8 md:mt-6 mt-4', 'lg:mb-3 md:mb-2 mb-1']
        }
      },
      p: {
        slots: {
          base: 'lg:text-base md:text-sm text-xs'
        }
      }
    }
  }
})
