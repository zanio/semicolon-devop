module.exports = {
  transpileDependencies: ["vuetify", "vue-tel-input-vuetify"],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = 'DevSuite - App'
          return args
        })
  },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
    devServer: {
        disableHostCheck: true,
    },
};
