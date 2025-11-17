export default defineNuxtPlugin(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BN01KLSZXZ'
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  const gtag = (...args) => window.dataLayer.push(args)

  gtag('js', new Date())
  gtag('config', 'G-BN01KLSZXZ')

  return {
    provide: {
      gtag
    }
  }
})
