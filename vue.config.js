module.exports = {
  transpileDependencies: ["vuetify", "vue-tel-input-vuetify"],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Reeach - App'
          return args
        })
  }
};
