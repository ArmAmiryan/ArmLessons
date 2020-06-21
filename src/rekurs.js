// Рекурсия

function pow(x, n) {
  if (n == 1) {
  return x;
  }
  else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3));


function pow(x, n) {
  return (n == 1) ? x : x * pow(x, n - 1);
}

console.log(pow(2, 3))

// Остаточные параметры (...)

function small(...args) {
  let sum = 0;
  for (let arg of args) {
      sum += arg;
  }
  return sum;
}

console.log(small(1, 2, 3))

function showName(firstName, lastName, ...titles) {
  console.log(`${firstName} ${lastName}`);
  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
}

showName('Ashot', 'Poghosyan', 'Armen', 'Arsen')

// Оператор расширения

const arr = [1, 2, 3];

console.log(Math.max(...arr));

const arr1 = [1, -5, 3];
const arr2 = [4, 2, -7];
const merged = [50, ...arr1, 8, ...arr2, 4];

console.log(merged);
console.log(Math.max(10, ...arr1, 7, ...arr2, 9));

const str = 'Hello';

console.log([...str]);


// Замыкание

let name = 'John';

function sayHi() {
  console.log('Hi ' + name);
}

name = 'Pete'

sayHi();


// Вложенные функции


function num(a, b) {
  function sum() {
    return a + b;
  } 

  console.log(sum())
}

num(1, 2);


function mackCounter() {
  let count = 0;
  return function() {
  return count++;
  };
}

let counter = mackCounter();
let counter1 = mackCounter();

console.log(counter());
console.log(counter());
console.log(counter1());

// Окружение в деталях


function makeWorker() {
  let name = 'Pete';
  return function() {
  console.log(name);
  }
}

let name = 'John';
let work = makeWorker();

work();


// concat 

let p = [1, 2, 3];
let t = [5, 2, 3];
let d = [9, -5, 11];

const arr2 = [];
const arr3 = arr2.concat(arr, arr1, 'str', {});
console.log(arr3);

function func(...arr) {
  let arrai = [];
  for (let key of arr) {
    if (Array.isArray(key)) {
        arrai.push(...key);
    else {
      arrai.push(key);
    }
  }
  return arrai;
}
console.log(func(p, t, 'str', {}, d))


// find

let g = [
  {
     age: 20,
  },
  {
  age: 10,
  },
  {
  age: 30,
  }
]

// console.log(g.find((item) => item.age === 10 ));

function funcfind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
  if(callback(arr[i], i, arr)) {
      return arr[i];
  }
  }
}

console.log(funcfind(g, (elem) => elem.age === 10));


