//ES module引入方式

// import Header from './header.js'
// import Side from './side.js'
// import Content from './content.js'


var Header = require('./header.js');
var Side = require('./side.js')
var Content = require('./content.js')


new Header();

new Side();

new Content();
