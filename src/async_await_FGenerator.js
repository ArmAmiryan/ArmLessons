// Async/await

// async function f() {
//   return 1
// }

// f().then(console.log)

// async function d() {
//   return Promise.resolve(2)
// }

// d().then(console.log)


// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Done'), 1000)
//   });

//   let result = await promise;
//   console.log(result);
// }

// f();

// async function showAvatar() {

//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

// Task

// async function loadJson(url) {
//   const response = await fetch(url);
//   if(response.status == 200) {
// 	return response.json()
//   } else {
// 	throw new Error(response.status)
//   }
// }

// loadJson('no-such-user.json')
// .catch(alert)


// Функция-генератор

// function* generatorFunc() {
// 	yield 1;
// 	yield 2;
// 	return 3;
// }

// const funcGenNext = generatorFunc();

// const one = funcGenNext.next()
// const two = funcGenNext.next()
// const three = funcGenNext.next()
// const four = funcGenNext.next()
// console.log(three)
// console.log(four)

// function* f() {
// 	yield 3;
// 	yield 4;
// 	yield 5
// }

// const genFunc = f()

// for (let value of genFunc) {
// 	console.log(value);
// }


// Использование генераторов для перебираемых объектов

// const range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]: function () {
//   	return {
//       current: this.from,
//       last: this.to,
//       next: function () {
//       	if(this.current <= this.last) {
//       		return {value: this.current++, done: false};
//       	} else {
//       		return {done: true};
//       	}
//       }
//   	}
//   }
// }

// for (let value of range) {
//   console.log(value);
// }


// const rangeGenerator = {
//   from: 1,
//   to: 7,
//   *[Symbol.iterator]() {
// 	for(let value = this.from; value <= this.to; value++) {
// 	  yield value  
// 	}
//   }
// }

// for(let key of rangeGenerator) {
// 	console.log(key)
// }

