const html = document.documentElement
const body = document.body

const firstChild = body.firstChild
const firstElement = body.firstElementChild

const nextChild = body.childNodes[1]

const nextchild2 = body.firstChild.nextSibling
const nextchild3 = body.firstChild.nextSibling.nextSibling.nextSibling

const previouschild = nextchild2.previousSlibling

const allChild = html.children[1].children[0].children

const form  = document.forms.myform
const table = form.firstElementChild

const firstRows = table.rows[0]
const cells = firstRows.cells

const input = document.forms.myform.elements.myinput

console.log(body.firstElementChild.nodeName)
console.log(body.firstElementChild.innerHTML)

const h1 = firstElement.nextElementSibling
h1.id = 'test'
console.log(h1.id)

console.log(firstElement.getAttribute('id'))
console.log(firstElement.hasAttribute('id'))
console.log(firstElement.removeAttribute('id'))
console.log(firstElement.setAttribute('class', 'ol-list'))

const ol = document.getElementById('ol')

const table  = document.querySelector('form > table')
const td = document.querySelectorAll('td')

const tr = document.getElementsByTagName('tr')
// const li = document.getElementsByClassName('li-list') 
const input = document.getElementsByName('myinput')

const textNode = document.createTextNode('Element 1')
const li = document.createElement('li')
li.append(textNode)
const ul = document.createElement('ul')
ul.append(li)

document.body.append(ul)

const newTable = table.cloneNode(true)

const parent = ol.parentNode

const x = parent.removeChild(ol)

parent.append(x)

const h1 = document.getElementById('heading')

parent.insertBefore(x, h1)