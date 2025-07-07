import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering
  ssr: false,

  // Global page headers
  head: {
    titleTemplate: '%s - bsit3a-system-integ',
    title: 'bsit3a-system-integ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // ✅ Firebase plugin
  plugins: [],

  // Global CSS
  css: [],

  // Auto import components
  components: true,

  // Build modules
  buildModules: ['@nuxtjs/vuetify'],

  // Nuxt modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    redirect: {
      login: '/auth/signin', 
      logout: '/auth/signin',
      callback: '/auth/callback',
      home: '/'
    },
    autoFetchUser: false,
    strategies: {
      google: {
        clientId: '172715563493-ammda06gisn96t44uireuevjqacrecf6.apps.googleusercontent.com',
        scheme: 'oauth2',
        endpoints: {
          authorization: "https://accounts.google.com/o/oauth2/auth",
          userInfo: "https://www.googleapis.com/oauth2/v3/userinfo",
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800,
        },
        responseType: "token id_token",
        scope: ["openid", "profile", "email"],
        redirectUri: "http://localhose:3000/auth/callback",
        codeChallengeMethod: "",
        },
      },
    },

  // Vuetify config
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build configuration
  build: {}
}