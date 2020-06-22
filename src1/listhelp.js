;(() => {
	const list = document.querySelectorAll('li')

list.forEach((elem) => {
	elem.onclick = function () {
		console.log(this.innerHTML)
	}
})
})()