/**
 * @description:ES-Module 引入方式 
 */
//webpack is a module bundler   webpack是一个模块打包工具,不是一个js翻译器

// import Header from './header.js'
// import Side from './side.js'
// import Content from './content.js'


/**
 * @description: CommonJS 引入方式
 */
// var Header = require('./header.js');
// var Side = require('./side.js')
// var Content = require('./content.js')
// var Avator = require('./avator.jpg')

// console.log(Avatar)

import avatar from './avatar.jpg'
import css from './style.css'

var img = new Image()
img.src = avatar

console.log(`%c [url-loader]:`, 'color: #3381e3', avatar)
console.log(`%c [css]:`, 'color: #988234', css)

var root = document.getElementById('root')
root.append(img)

// new Header();

// new Side();

// new Content();