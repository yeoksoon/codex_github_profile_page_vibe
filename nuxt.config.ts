export default defineNuxtConfig({
  compatibilityDate: '2026-06-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { name: 'theme-color', content: '#f8fbf7' }
      ]
    }
  }
})
