module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MySite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MySite is Nuxt Project' },

      { name: 'og:title', content: 'Mysite' },
      { name: 'og:description', content: 'Mysite is Nuxt Project' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://mysite-82322.firebaseapp.com' },
      { name: 'og:image', content: 'https://mysite-82322.firebaseapp.com/card.png' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://mysite-82322.firebaseapp.com' },
      { name: 'twitter:title', content: 'Mysite' },
      { name: 'twitter:description', content: 'MySite is Nuxt Project' },
      { name: 'twitter:image', content: 'https://mysite-82322.firebaseapp.com/card.png' }
    ],
  },
  modules: ['@nuxtjs/pwa'],
  workbox: {dev: true},
  meta: {
    mobileAppIOS: true,
    viewport: 'width=device-width, initial-scale=1'
  },
  manifest: {
    name: 'MySite',
    short_name: 'MySite',
    description: 'MySite is Nuxt Project',
    start_url: '/',
    display: 'standalone',
    theme_color: '#FFFFFF',
    lang: 'ja',
  },
  plugins: [
    { src: '~/plugins/scrollto', ssr: false },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   /*
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    */
   extend (config, ctx) {
    if (ctx.dev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: new RegExp('(js|vue)$'),
        exclude: new RegExp('(node_modules)')
      })
    }
  }
 }
}