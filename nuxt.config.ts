import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appId: "serp",
  site: {
    url: "https://serp.apps.rgn.dev",
    name: "Search Engine Result Preview | RGN Apps",
    description: "This tool allows you to preview your meta title and meta description tags in the style of a Google search result.",
    defaultLocale: "en",
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/seo'],
  ui: {
    colorMode: false,
  },
  css: ['~/assets/css/main.css'],
  ssr: false,
  ogImage: { enabled: false },
})