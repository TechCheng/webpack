// module.exports = {
//   plugins: [
//       require('autoprefixer')
//   ]
// }

module.exports = {
  "plugins": [
    require('autoprefixer')({
      overrideBrowserslist: [
        "> 1%",
        "last 5 versions",
        "ie >= 7"
      ]
    })
  ]
}