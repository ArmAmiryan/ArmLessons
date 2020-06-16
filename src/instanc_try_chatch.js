// try-catch-finnaly-throw

// 'BYby'
// try {
//   console.log('try blockk')
// }
// catch(error){
//   console.log('error block')
// }
// finally{
//   console.log('finnaly block')
// }

// console.log('Hello')

// const json = '{"name": "John", "age": 30}';

// const user = JSON.parse(json);

// console.log(user.name);
// console.log(user.age);

// let json = '{ Incorrect JSON }';

// try {
//   let user = JSON.parse(json);
//   console.log(user)
// }
// catch(e) {
//   console.log('please one minut');
//   console.log(e.name);
//   console.log(e.message);
// }


let json  = '{ "age": 30 }';

try{
  let user = JSON.parse(json);

  if(!user.name) {
	throw new SyntaxError('user has not name')
  }

  console.log(user.name)
} catch(e) {
  console.log('JSON Error: ' + e.message);
}