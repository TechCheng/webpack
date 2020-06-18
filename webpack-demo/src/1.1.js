/**
 * @description: 
 * @param {type} 
 * @return: 
 */


let regex = "hello".replace(/(?!l)/g, '#');
let string = "<div id='container' class='main'></div>"
let result = string.match(regex)
let arr = []
arr.push(`【String】${string}`, `【Regx】${regex}`)

export {
  arr, result
}