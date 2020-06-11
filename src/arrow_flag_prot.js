// стрелочные функции

let group = {
  title: 'our group',
  students: ['John', 'Pete', 'Alice'],
  showlist() {
    this.students.forEach(
    student => alert(this.title + ' ' + student))
  }
}

group.showlist()


function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

function sayHi(who) {
  alert('Hello ' + who);
}

let sayDeferend = defer(sayHi, 2000);

sayDeferend('John')

// Флаги и дескрипторы свойств


let user = {
  name: 'Pete'
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2))

Object.defineProperty(user, 'name', {
  writable: false,
  enumerable: false,
  configurable: false,
})


let obj = {};

Object.defineProperty(obj, 'age', {
  value: 18,
  writable: false,
  enumerable: false,
  configurable: false,
})


// Свойства - геттеры и сеттеры

let user = {
  name: 'Bill',
  surname: 'Gets',

  get fullname() {
    return `${this.name} ${this.surname}`;
  },

  set fullname(value) {
    const [name, surname] = value.split(' ');
    this.name = name;
    this.surname = name;
  }
}

console.log(user.fullname);

let user = {
  name: 'John',
  surname: 'Smith'
}

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`
  },
  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
})


console.log(user.fullName)


let user = {
  _name: '',
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log('name is a title ttext');
      return;
    }
    this._name = value;
  }
}


function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let toDayYear = new Date().getFullYear();
      return toDayYear - this.birthday.getFullYear();
    }
  })
}

const john = new User('John', new Date(1992, 6, 11));


// Прототипное наследование

let animal = {
  eats: true,
}

let rabbit = {
  jumps: true,
}

rabbit.__proto__ = animal;


console.log(rabbit.eats);
console.log(rabbit.jumps);

let animal = {
  eats: true,
  walk() {
    console.log('Animal walk')
  }
}

let rabbit = {
  jumps: true,
  __proto__: animal,
}

let longEar = {
  earLength: 10,
  __proto__: rabbit
}

rabbit.walk();
longEar.walk();
console.log(longEar.jumps);


let user = {
  name: 'Bill',
  surname: 'Gets',

  set fullname(value) {
    [this.name, this.surname] = value.split(' ');
  },
  get fullname() {
    return `${this.name} ${this.surname}`;
  }
}

let admin = {
  __proto__: user,
  isAdmin: true,
}

console.log(admin.fullname)

admin.fullname = 'Alice Cooper';

console.log(admin.name);
console.log(admin.surname);


let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

console.log(Object.keys(rabbit));

for (let prop in rabbit) {
  console.log(prop)
}


Tasks

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
}

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);


F.prototype

function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

User.prototype.fullname = function() {
  return `${this.name} ${this.surname}`
}

const user  = new User('Stiv', 'Jobs');
const admin = new User('Bill', 'Gets');

