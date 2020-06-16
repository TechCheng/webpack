const path = require('path'); //node的核心模块

module.exports = {
  // mode:"production",
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist') //dirname代表webpack.config.js文件所在的路径，然后和dist作一个结合，生成bundle.js的文件所在的绝对路径
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              limit: 8192 //小于8192b,就可以转化成base64格式。大于就会打包成文件格式
            }
          }
        ]
      },
      {
        test: /\.css$/, //匹配以css为后缀的文件
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          'postcss-loader',//配置在css-loader后，在sass|less|stylus-loader 之前。
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ],//loader的执行顺序是从右向左，从下到上。css-loader：分析几个css文件之间的关系，最终合并为一个css。style-loader:在得到css生成的内容时，把其挂载到html的head里，成为内联样式。
      },
    ]
  },
}