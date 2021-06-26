module.exports = {
  devServer: {
    proxy: "https://itunes.apple.com/",
  },
  transpileDependencies: [
    'vuetify'
  ]
}
