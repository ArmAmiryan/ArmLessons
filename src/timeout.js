// Объект функции, NFE

function sayHi() {
  alert('Hello');
}

console.log(sayHi.name);


const sayBy = function() {
  alert('hi');
}

console.log(sayBy.name);


function f(sayHi = function() {}) {
  console.log(sayHi.name);
}

f()


const user = {
  sayHi() {

  },
  sayBy: function() {

  }
	
}

console.log(user.sayHi.name);
console.log(user.sayBy.name);


// Свойство «length»


function f() {};
function f1(a) {};
function f2(b, c, ...d) {};

console.log(f.length);
console.log(f1.length);
console.log(f2.length);


// Пользовательские свойства


function sayHi() {
  console.log('Hi');
  sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();

console.log(sayHi.counter);


function makeCounter() {
  function counter() {
	return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function makeCounter() {
  function counter() {
	return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
counter.count = 10;

console.log(counter());
console.log(counter());


// Named Function Expression

let sayhi = function func(who) {
  console.log(`Hi ${who}`);
}

sayhi('John');


let sayby = function func(who) {
  if (who) {
	console.log(`By ${who}`);
  } else {
	func('Guest');
  }
}

sayby();

let sayByby = function func(who) {
   if (who) {
   	console.log(`Byby ${who}`);
   } else {
   	func('Guest');
   }
}

let byBy = sayByby;
sayByby = null;

byBy();

// Синтаксис "new Function"

let sum = new Function('a','b','return a + b');
console.log(sum(1, 2))

let sayHi = new Function('alert("Hello")')
sayHi()

function getFunc() {
  let value = 'test';
  let func = new Function('alert(value)');
  return func;
}

// getFunc()(); // Error


function makCounter() {
	debugger;
  makCounter.count = 0;
	return function counter() {
	return	makCounter.count++;
  }
  return makCounter.count
}

let count = makCounter();

console.log(count())
console.log(count())
console.log(count())
makCounter.count = 1000;
console.log(count())
console.log(count())
console.log(count())


// Планирование: setTimeout и setInterval


function sayHi() {
  console.log('Hi');
}

setTimeout(sayHi, 3000);

function sum(a, b) {
  console.log(a + b);
} 

setTimeout(sum, 2000, 1, 2);

let timerId = setTimeout(() => console.log('Hello'), 3000);

clearTimeout(timerId);

let id = setInterval(() => console.log('tick'), 2000);

setTimeout(() => {
  clearTimeout(id);
  console.log('STOP');
}, 7000)

// Рекурсивный setTimeout

let timerId = setTimeout(function func() {
  console.log('tick');
  timerId = setTimeout(func, 2000);
}, 2000)

clearTimeout(timerId);


// setTimeout с нулевой задержкой


setTimeout(() => console.log('World'));

console.log('Hello');

