//Number object and its properties
//http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n){
  if (n === 1.7976931348623157e+308) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === 5e-324) {
    return "Input number is Number.MIN_VALUE";
  } else if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n === -Infinity) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if(n === Infinity) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else {
    return `Input number is ${n}` ;
  }
}
//Methods of Number object--toString() and toLocaleString()
//https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(r,g,b){
  let rStrIf;
  let gStrIf;
  let bStrIf;
  if (r.toString(16).length < 2) {
    rStrIf = '0' + r.toString(16)
  } else {
     rStrIf = r.toString(16)
  }
  if (g.toString(16).length < 2) {
    gStrIf = '0' + g.toString(16)
  } else {
     gStrIf = g.toString(16)
  }
  if (b.toString(16).length < 2) {
    bStrIf = '0' + b.toString(16)
  } else {
     bStrIf = b.toString(16)
  }
  return '#' + rStrIf + gStrIf + bStrIf
}
