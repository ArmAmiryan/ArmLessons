;(function() {
const [first, second]  = document.querySelectorAll('.input');
const buttons = document.querySelectorAll('button');
const count = document.querySelector('.count');

buttons.forEach((elem) => {
  const classes = elem.className.split(' ')[1];
  elem.onclick = () => {
	count.innerHTML = helper[classes](first.value, second.value)
  }
})
})()