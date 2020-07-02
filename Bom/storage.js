// const btn = document.getElementById('btn');

// let seter = true;

// btn.onclick = function () {
//   if(seter){
// 	window.localStorage.setItem('key', JSON.stringify({name: 'Stiv'}));
// 	seter = false;
//   } else {
//   	console.log(JSON.parse(window.localStorage.getItem('key')))
//   	window.localStorage.removeItem('key')
//   	seter = true;
//   }
// }

const btn = document.getElementById('btn');

let seter = true;

btn.onclick = function () {
  if(seter){
	window.sessionStorage.setItem('key', JSON.stringify({name: 'Stiv'}));
	seter = false;
  } else {
  	console.log(JSON.parse(window.sessionStorage.getItem('key')))
  	window.sessionStorage.removeItem('key')
  	seter = true;
  }
}