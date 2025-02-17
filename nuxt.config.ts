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
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Blog Preview Card | Frontend Mentor Challenge',
      meta: [
        {
          name: 'description',
          content: 'A blog preview card built with Nuxt and TailwindCSS',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'preload',
          as: 'fetch',
          href: '/_nuxt/builds/meta/f108dbf9.json',
          crossorigin: 'anonymous',
        },
        {
          rel: 'canonical',
          href: 'https://blog-card-preview-challenge.netlify.app',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@500;800&display=swap',
        },
      ],
    },
  },
})
