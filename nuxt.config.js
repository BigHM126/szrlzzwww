const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/szrlzzwww/'
        }
      }
    : {}
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '瑞联智造|智能工厂|MES/WMS/QMS/APS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          '瑞联智造|智能工厂|MES/WMS/QMS/APS'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/scss/config.scss',
    '~assets/style.scss',
    '~assets/vendor/font-awesome/css/font-awesome.min.css',
    '~assets/vendor/flaticon/css/flaticon.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/swiper.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */

  ...routerBase,

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
    // componentPlugins: ['IconsPlugin']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
