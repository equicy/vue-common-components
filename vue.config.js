const conf = require('./config/appConfig');

module.exports = {
  pages: conf.pages,
  publicPath: './',
  outputDir: conf.outputDir,
  assetsDir: 'static',
  devServer: conf.devServer,
  productionSourceMap: false,
  chainWebpack: conf.chainWebpack,
  configureWebpack: conf.configureWebpack
};
