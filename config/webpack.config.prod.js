const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./weboack.config.base')
const Environment = process.env.NODE_ENV
let BaseURLMode = ''
if (Environment === 'production') {
  BaseURLMode = 'http://admin.thewemore:8000/API'
} else if (Environment === 'test') {
  BaseURLMode = 'http://test.thewemore:8000/API'
} else {
  BaseURLMode = 'http://192.168.1.6:9000/API'
}
const merge = require('webpack-merge')
const mode = 'production'
const output = {
  filename:'scripts/[name].[hash].js',
  chunkFilename: 'scripts/[name].[hash:8].js'
}
const optimization = {
  splitChunks: {
    cacheGroups: {
        commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2
        }
    }
  },
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        // 删除注释
        output:{
          comments:false
        },
        // 删除console debugger 删除警告
        compress: {
          // warnings: false,
          drop_console: true,//console
          drop_debugger: false,
          pure_funcs: ['console.log']//移除console
        }
      }
    }),
    new TerserPlugin({
      cache: true,
      parallel: true,
      // sourceMap: true, // Must be set to true if using source-maps in production
      terserOptions: {
        compress: {
          drop_console: true,
        },
      }
    }),
    new OptimizeCSSAssetsPlugin()
  ],
}
const plugins = [
  new webpack.DefinePlugin({
    BaseURL: BaseURLMode
  }),
//   new UglifyJsPlugin({
//     uglifyOptions:{
//         compress: {
//             warnings: false,
//             drop_console: true,//console
//             pure_funcs: ['console.log']//移除console
//         }
//     },
//     sourceMap: true
// }),
  new MiniCssExtractPlugin({
    // 类似 webpackOptions.output里面的配置 可以忽略
    filename: 'styles/[name][hash:8].css',
    chunkFilename: 'styles/[id][hash:8].css',
  }),
]
let prodConfig
prodConfig = merge(baseConfig, {
  optimization,
  output,
  mode,
  plugins
})
module.exports = prodConfig