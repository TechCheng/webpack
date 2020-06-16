// module.exports = {
//   plugins: [
//       require('autoprefixer')
//   ]
// }

module.exports = {
  "plugins": [
    require('autoprefixer')({
      browsers: [
        "> 1%",
        "last 5 versions",
        "ie >= 7"
      ]
    })
  ]
}