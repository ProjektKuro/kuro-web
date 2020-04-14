module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  publicPath: '',
  pwa: {
    appleMobileWebAppCapable: true,
    icons: [{}],
    name: "kuro-web",
    shortName: "kuro-web"
  },
  transpileDependencies: [
    "vuetify"
  ]
}
