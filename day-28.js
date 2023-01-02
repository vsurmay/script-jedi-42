//Function within a function (Submit може не працювати, перевірте чи проходить Attempt)
//http://www.codewars.com/kata/a-function-within-a-function
function always (n) {
 return function() {
   return n
 }
}
//[JEDI LEVEL] Pure function
//https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript
const state = {
  modifier: 2,
};
function solution(arr, options) {
  return arr.map(el => el + 2 * options.modifier)
}
