const path = require('path')

export default {
  head: {
    title: 'Nuxt Tailwind CSS + Purgecss',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A static site powered by Nuxt.js'
      }
    ]
  },

  css: ['~/assets/css/tailwind.css'],

  build: {
    postcss: {
      plugins: {
        tailwindcss: path.join(__dirname, 'tailwind.js'),
        autoprefixer: {},
        '@fullhuman/postcss-purgecss': {
          content: [
            path.join(__dirname, './pages/**/*.vue'),
            path.join(__dirname, './layouts/**/*.vue'),
            path.join(__dirname, './components/**/*.vue')
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          whitelist: ['html', 'body', 'nuxt-progress']
        }
      }
    }
  }
}
