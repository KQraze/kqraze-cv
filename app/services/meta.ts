export const metaService = {
  getHomePage: () => queryCollection('home').first(),
  getAbout: () => queryCollection('about').first()
}
