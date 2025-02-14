// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  nitro: {
    output: {
      publicDir: '.output/public',
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@500;800&display=swap',
        },
      ],
    },
  },
})
