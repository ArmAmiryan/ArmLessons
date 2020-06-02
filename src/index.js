// Структура кода

alert('Hello');
alert('World');

alert('this is a Error');
[1, 2].forEach(alert)



// Переменные


var name;
let surname;
const user;

let _ ;
let $ ;

let myName;
let My_Name;


// TASK

let admin;
let name;
name='John';
admin=name;
alert(admin);



// Number

let n=12456;
n=124.568;

alert(1/0);
alert(Infinity);

alert('not a number'/2+5);



//Bigint

const bigint=12313351516165551115115165155165165165151515614646545n;



// String

let name='Arman';
let surname="Amiryan";
let phrase=`Hello ${name}`;

alert(`result: ${1+2}`)



//Boolean

let name=true;
let surname=false;

let result=4>1;
alert(result)



//Null

let age=null;



//Undefined

let x;
alert(x);

let n=123;
n=undefined;
alert(n);

alert(typeof (n));
alert(typeof n);


// Task

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya




// Преобразование типов

// Строковое преобразование

 alert(value)


let value=true;
alert(typeof value);

value=String(value);
alert(typeof value);



// Численное преобразование

alert('6'/'2') ;

let str='123';
alert(typeof str)

let num=Number(str);
alert(typeof num);

alert(1+'2');
alert('1'+2);


// Логическое преобразование


alert(Boolean(1)); // true
alert(Boolean(0)); //false
alert(Boolean('hello')); //true
alert(Boolean('')); //false


// Task


"" + 1 + 0 // 1
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '45px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // '-95'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2




//Операторы

let x=1;
x=-x;
alert(x);

let n=4;
let y=6;
alert(y-n);



// бинарный оператор +


let s='Hello'+'World';
alert(s);

let l=1+1+'5';
alert(l);

let d=6/'2';
alert(d);




//унарный плюс преобразует number


let k=1;
alert(+k);
let j=-2;
alert(+j);

alert(+true);
alert(+'')

let apples='3';
let oranges='5';
alert(apples+oranges);
alert(+apples + +oranges);

alert(5%2); //1
alert(8%3); //2

alert(4**2); // 16
alert(4**3); // 64

alert(4**(1/2)); // 2
alert(8**(1/3)); // 2



//Инкремент/декремент

let r=1;
alert(r++)
alert(r)
let f=1;
alert(++f);

let m=5;
alert(--m);
let h=5;
alert(h--)



//Сокращённая арифметика с присваиванием

let n=5;
n+=6;
n*=2;
alert(n);

let p=2;
p*=3+5;
alert(p);



//Оператор запятая

let a=(1+5,2+3);
alert(a); // 5


//Task

let a=1; // 2
let b=1; // 2
let c=++a; //2
let d=b++; //1



let a=2;

let x=1+(a*=2); // 5, a=4;



//Взаимодействие: alert, prompt, confirm


let age=prompt('?',100);
alert(`${age}!`);



let isBoss=confirm('is boss?');
alert(isBoss);


//Task

let userName=prompt('What is your name?','name');
alert(userName);




//Условные операторы: if, '?'

let year=prompt('In which year was the ECMAScript-2015 specification published?', '');
if(year>2015){
	alert('Too early...');
}
else if(year<2015){
	alert('Too late');
}
else{
	alert('Exactly!');
}


let age=prompt('age?',18);
let message=(age<10)?'Hello Baby':
(age<18)? 'Hello':
(age<100)? 'Hello Mister':
'Good By';
alert(message)



let message=prompt('What is the official name of JavaScript?');
if(message=='ECMAScript'){
	alert('Right!');
}
else{
	alert('You do not know? ECMAScript!')
}



let result;
result=(a+b<4)?'title':'big';



let message;
message=(login=='Сотрудник')? 'Привет':
(login=='Директор')?'Здравствуйте':
(login=='')? 'Нет логина':
'';




// Логические операторы



alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false



alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false



alert(!true); // false
alert(!0); // true
alert(!!'string'); // true
alert(!!null); // false


// Task


alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1, 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1, undefined

let age;
if(age>=14 && age<=90){
	alert(age);
}

if(!(age>=14 && age<=90)){
	alert(age);
}
if(age<14 && age>90){
	alert(age);
}


if (-1 || 0) alert( 'first' ); // 'first'
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert( 'third' ); // 'third'


let user=prompt('login');

if(user=='Admin'){

	let parol=prompt('parol');

	if(parol=='TheMaster'){
		alert('Welcome!');
	}

	else if(parol=='' || parol==null){
		alert('Canceled');
	}

	else{
		alert('Wrong password')
	}
}

else if(user=='' || user==null){
	alert('Canceled');
}

else{
	alert('I don’t know you');
}

let j=0;

while(j<5){
	alert(j);
	j++
}

let i=5;
while(i){
	alert(i);
	i--
}