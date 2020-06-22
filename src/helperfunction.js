const helper = (function() {
function isNumber(arg) {
  return isFinite(arg)
}

function plus(a, b) {
  if(isNumber(a) && isNumber(b)) {
  return Number(a) + Number(b)	
  } else {
  	return 'please add number'
  }
}

function min(a, b) {
  if(isNumber(a) && isNumber(b)) {
  return Number(a) - Number(b)	
  } else {
  	return 'please add number'
  }
}

function mul(a, b) {
  if(isNumber(a) && isNumber(b)) {
  return Number(a) * Number(b)	
  } else {
  	return 'please add number'
  }
}

function div(a, b) {
  if(isNumber(a) && isNumber(b)) {
  return Number(a) / Number(b)	
  } else {
  	return 'please add number'
  }
}
return {
	plus,
	min,
	mul,
	div
}
})()
