const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const loadersUse = (firstLoader) => {
  return [
   {
     loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader// 加变量
    //  options: {
    //    hmr: isDev
    //  },
   },
   'css-loader',
   firstLoader
 ]
}
const devServer = {
  compress: true,
  hot: true,
  historyApiFallback: true,
  host: "0.0.0.0",
  port: 3000,
  inline: true,
  disableHostCheck:true, // 与output的publicPath有关(HTMLplugin生成的html默认为index.html)
  // publicPath: '/dist',
  proxy: { // 反向代理
    '/api': {
      target: 'http://39.97.33.178',
      changeOrigin: true // 是否改变api地址
    }
  }
}
const config = {
  entry: {
    APP: [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: 'http://127.0.0.1:3000/'
  },
  devServer,
  stats: { children: false },
  module: {
    rules: [
      {
        test: /\.m?js$/, // 来处理以js结尾的文件
        exclude: /(node_modules|bower_components)/, // node_modules 和 bower中的文件不需要解析
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 将es6或者es7的语法转换为es5
            plugins: ['syntax-dynamic-import',["component", { "libraryName": "mint-ui","style": true}]]
          }
        }
      },
      {
        test: /\.css$/,
        loaders: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.(styl|stylus)$/, //解析以css结尾的文件
        use:loadersUse('stylus-loader'),
        // exclude: /node_modules/
      },
      // {
      //   test:/\.styl$/, //解析以styl结尾的文件 但是他将sty先转为css 所以还需要一个loader来解析css
      //   loaders: ['css-loader', 'stylus-loader']
      // },
      {
        test: /\.vue$/, // 处理.vue结尾的文件 但是单凭这个还不够 还需要plugin
        loader: 'vue-loader'
      },
      {
        test: /\.(jpg|png|svg|gif|svg|jpeg|eot|woff|ttf|otf)$/, // 处理一些图片
        loader: 'url-loader',
        options: {
          limit: 20048 // 当图片大于当前设定大小 会处理会单独的文件 否则会直接解析成base64格式压缩到js文件当中
          // outputPath: 'images/[name][hash:8].[ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
        'vue': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/public/index.html')
    }),
    new VueLoaderPlugin() //处理vue的文件 同时还需要下载 vue-template-compiler 这个依赖来解析他的模板
  ]
}
module.exports = config