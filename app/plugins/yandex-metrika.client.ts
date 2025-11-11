// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export default defineNuxtPlugin(() => {
  const YANDEX_METRIKA_ID = '105130603'

  // Инициализация Яндекс Метрики
  ;(function (m: unknown, e: Document, t: string, r: string, i: string) {
    m[i] = m[i] || function () {
      // eslint-disable-next-line prefer-rest-params
      ;(m[i].a = m[i].a || []).push(arguments as unknown)
    }
    m[i].l = 1 * new Date()

    const k = e.createElement(t)
    const a = e.getElementsByTagName(t)[0]
    k.async = 1
    k.src = r
    a.parentNode.insertBefore(k, a)
  })(
    window,
    document,
    'script',
    `https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}`,
    'ym'
  )

  // Инициализация с параметрами
  ;(window as unknown).ym(YANDEX_METRIKA_ID, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    accurateTrackBounce: true,
    trackLinks: true
  })
})
