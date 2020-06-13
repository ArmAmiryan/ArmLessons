// Класс: базовый синтаксис

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//   	console.log(this.name)
//   }
// }

// const user = new User('Stiv');
// user.sayHi();

// Наследование классов

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 		this.speed = 0;
// 	}

// 	run(speed) {
// 		this.speed = speed;
//         console.log(`${this.name} run is a ${this.speed}`)
// 	}

// 	stop() {
// 		console.log(`${this.name} stoped`)
// 	}
// } 

// const animal = new Animal('my animal');



// class Rabbit extends Animal {
// 	constructor(name, earLength) {
// 		super(name);
// 		this.earLength = earLength;
// 	}
// }

// const rabbit = new Rabbit('black rabbit', 10);


// class Machine {
//   constructor(vat) {
//     this.vat = vat;
//   }

//   setWather(value = 200) {
//     this.water = value;
//   }

//   start(timer) {
//     if(this.water && timer) {
//       console.log('start')
//       this.power = true;
//       this.timerId = setTimeout(this.stop, timer);
//       this.water = 0;
//       return 'ise Ready';
//     }
//     console.log('not a wather');
//   }

//   stop = () => {
//     if(this.power) {
//       console.log('stop');
//       this.power = false;
//       clearTimeout(this.timerId);
//       return;
//     }
//     console.log('Machin not started');
//   }
// };

// class CoffeeMachine extends Machine {
//   constructor(vat) {
//     super(vat);
//   }

//   setCoffee(value) {
//     this.coffee = value;
//   }

//   start(timer) {
//     if(this.coffee) {
//       super.start(timer);
//       return;
//     }
//     console.log('not started', '>>>>>');
//   }
// }

// const coffeeMachine = new CoffeeMachine(200)

class Machine{
	constructor(name) {
		this.name = name;
	}

  setWater(value = 200) {
  	this.water = value;
  }

  start() {
  	if(this.water) {
  	this.water = 0;
  	console.log('started')
  	}
  	else{
  	console.log('not start, scored a water')
  }
  }

  stop() {
  	console.log('stop')
  }
}

class CoffeeMachine extends Machine{
	constructor(name){
		super(name);
	}

	setCoffe(val = 50){
     this.coffe = val;
	}

	start() {
		if(this.coffe){
		this.coffe = 0;
		super.start();
	} else {
		console.log('not start, Add to coffe and water')
	}
	}

	stop() {
		super.stop()
	}
	
  
}

const coffemachine = new CoffeeMachine('coffeeMachine')
