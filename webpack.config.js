const path = require('path');  //node的核心模块

module.exports = {
  // mode:"production",
  mode: "development",
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //placeholders 占位符
              name: '[name].[ext]',
              outputPath: 'images/',
              limit: 204800
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader',],
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist') //dirname代表webpack.config.js文件所在的路径，然后和dist作一个结合，生成bundle.js的文件所在的绝对路径
  }
}