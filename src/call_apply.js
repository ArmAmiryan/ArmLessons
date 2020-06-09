function slow(x) {
  alert(`call width ${x}`);
  return x;
}


function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
	if (cache.has(x)) {
		return cache.get(x);
	}

	let result = func(x);
	cache.set(x, result);
	return result;
  }
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(2));


let worker = {
  some() {
	return 1;
  },
  slow(x) {
	alert(`call width` + x);
	return x * this.some();
  }
};

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
	if(cache.has(x)) {
	return	cache.get(x);
	}

	let result = func.call(this, x);
	  cache.set(x, result);
	  return result;
  };
}

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2));
console.log(worker.slow(2));



let worker = {
  slow(min, max) {
	alert(`call width ${min},${max}`);
	return min + max;
  }
};


function cachingDecorator(func, hash) {
  let cache = new Map();

  return function() {
    let key = hash(arguments);
	if(cache.has(key)) {
	return	cache.get(key);
	}
	let result = func.apply(this, arguments);
	cache.set(key, result);
	return result;
  }
};

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5))


let user = {
  names: 'John',

  sayhi() {
    console.log(this.names)
  },

  by() {
	console.log('Byby');
  }
}

const btn = document.getElementById('btn');

function bindCopy(context, func) {
  return function(...args) {
	return func.apply(context, args);
  }
}

btn.addEventListener('click', bindCopy(user, user.sayhi));





