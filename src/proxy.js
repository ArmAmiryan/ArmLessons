// Proxy 

let proxy = new Proxy(target, handler);
const proxy = new Proxy({}, {})

let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target.test);

console.log(proxy.test);

for (let key in proxy) {
	console.log(key);
}

// Get

let numbers = [0, 1, 2, 3, 4];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if(target[prop]) {
	  return target[prop];
	} else {
	  console.log('Item is undefined')
	}
  }
});

let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adios',
}

dictionary = new Proxy(dictionary, {
  get(target, prop) {
	if(prop in target) {
	  return target[prop];
	} else {
	  return prop;
	}
  }
})

// Set

const numbers = new Proxy([], {
  set(target, prop, value) {
	if(typeof value === 'number') {
	  target[prop] = value;
	  return true;
	} else {
	  return false;
	}
  }
}) 


const user = new Proxy({
  name: 'Bill',
  age: 30,
  _password: '*******',
  getName() {
  	return this.name;
  }
},
{
  get(target, prop) {
  	if(prop.startsWith('_')) {
  	  throw new Error('Rejected')
  	} else {
  	  let value = target[prop];
  	  return (typeof value === 'function') ? value.bind(target): value;
  	}
  },

  set(target, prop, value) {
  	if(prop.startsWith('_')) {
  	  throw new Error('Rejected')
  	} else {
      target[prop] = value;
      return true;
  	}
  },

  deleteProperty(target, prop) {
  	if(prop.startsWith('_')) {
  	  throw new Error('Rejected')
  	} else {
      delete target[prop];
      return true;
  	}
  },

  ownKeys(target) {
  	return Object.keys(target).filter(key => !key.startsWith('_'));
  }

})


const newUser = new Proxy({
	name: 'Stiv',
},
{
  get(target, prop, receiver){
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver){
    return Reflect.set(target, prop, value, receiver);
  }
})

// Tasks
// 1

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if(prop in target) {
    	return target[prop]
      } else {
    	throw new Error('an property does not exist');
      }
    }
  });
}

user = wrap(user);

console.log(user.name); 
console.log(user.age);


// Каррирование

function curry(f) {
  return function(a) {
	return function (b) {
	  return f(a, b);
	}
  }
}

function sum(a, b) {
	return a + b;
}

let carriedSum  = curry(sum);

console.log(carriedSum(1)(4))


function sum(a, b, c) {
	return a + b + c;
}

function curry(func) {
  return function curried(...args) {
	if(args.length >= func.length) {
	  return func.apply(null, args);
	} else {
	  return function(...args2) {
		return curried.apply(null, args.concat(args2));
	  }
	}
  }
}

const curryedSum = curry(sum)

console.log(curryedSum(1)(2)(3))
console.log(curryedSum(1, 2)(3))
console.log(curryedSum(1)(2, 3))
console.log(curryedSum(1, 2, 3))