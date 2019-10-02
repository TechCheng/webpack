//ES module引入方式
//webpack is a module bundler   webpack是一个模块打包工具,不是一个js翻译器

// import Header from './header.js'
// import Side from './side.js'
// import Content from './content.js'


var Header = require('./header.js');
var Side = require('./side.js')
var Content = require('./content.js')


new Header();

new Side();

new Content();

