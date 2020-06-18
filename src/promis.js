// const willGift = new Promise((resolve, reject) => {
//   let win = Math.random() > 0.5;
//   if(win) {
// 	resolve(setTimeout(() => console.log('You Win'), 2000));
//   } else {
// 	reject(setTimeout(() => console.log('You do not Win'), 2000));
//   }
// })

// const giftOnFb = function(gift) {
// 	return new Promise((resolve, reject) => console.log('I am Win'))
// }

// const buyTicket = function() {
// 	console.log('buying to gift ticket');
// 	willGift
// 	.then(giftOnFb)
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error));
// }

// buyTicket()

// function applyForVisa(documents) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
// 	  let visa = {
// 		document,
// 		approved: false,
// 	  }
// 	  let random = Math.random() > 0.2;
// 	  if (random) {
//         visa.approved = true;
//         visa.message = 'Approved';
//         resolve(visa);
// 	  } else {
// 	  	visa.message = 'Denied';
// 	  	reject(visa);
// 	  }
// 	}, 2000) 
//   })
// }

// const getVisa = visa => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => reject(visa), 2000)
// 	})
// }

// const bookHotel = visa => {
//    console.log('Book Hotel', visa);
//    return {
//    	...visa,
//    	bookHotel: true,
//    }
// };

// const buyTicket = (visa) => {
// 	console.log('By ticket', visa);
// };


// applyForVisa({pasport: true})
// .then((visa) => getVisa(visa))
// .then((visa) => bookHotel(visa))
// .then((visa) => buyTicket(visa))
// .catch(({message}) => console.error(`${message}`))
// .finally(() => console.log('finally block'));


// Цепочка промисов

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000)
// })

// .then((result) => {
//   console.log(result);
//   return result * 2;
// })
// .then((result) => {
//   console.log(result);
//   return result * 2;
// })
// .then((result) => {
//   console.log(result);
//   return result * 2;
// })

// let promis = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 2000)
// })

// promis.then((result) => {
//   console.log(result);
//   return result * 2;
// })

// promis.then((result) => {
//   console.log(result);
//   return result * 2;
// })

// promis.then((result) => {
//   console.log(result);
//   return result * 2;
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000)
// })

// .then((result) => {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   })
// })

// .then((result) => {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   })
// })

// .then((result) => console.log(result))


