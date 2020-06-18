import css from './style.css'
import {
  arr,
  result
} from './1.1'


var root = document.getElementById('root')
let title = document.getElementById('title')
let con = document.getElementById('con')

title.innerHTML = arr.join('<br/>')
con.innerHTML = `【Result】${result}`
