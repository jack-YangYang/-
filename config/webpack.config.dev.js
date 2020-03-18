const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./weboack.config.base')
const merge = require('webpack-merge')
const mode = 'development'
// process.env.NODE_ENV === 'development'
const isDev = process.env.NODE_ENV === 'development' //判断是否为开发环境
// let BaseURL
console.log(isDev)
const output = {
  publicPath: '/',
  filename:'[name].js',
  chunkFilename: '[name].chunk.js'
}

const plugins = [
  new webpack.DefinePlugin({ // 开发环境分为日常开发和正式开发环境
    'BaseURL': isDev ? JSON.stringify('http://192.168.2.203:8000/API') : JSON.stringify('http://test.theadmin:8000API')
  }),
  new MiniCssExtractPlugin({
    // 类似 webpackOptions.output里面的配置 可以忽略
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
]
let devConfig
devConfig = merge(baseConfig, {
  devtool:'eval-source-map',
  output,
  mode,
  plugins
})
// console.log(BaseURL)
module.exports = devConfig