//[JEDI LEVEL] Implement own reduce
//https://www.codewars.com/kata/array-number-reduce/train/javascript
Array.prototype.reduce = function (process, initial) {
  let arr = this;
  let acc = initial || arr[0];
  for (let i = initial ? 0 : 1; i < arr.length; i++) {
    acc = process(acc, arr[i], i);
  }
  return acc;
};
//[JEDI LEVEL] Deep freeze
//https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056
Object.deepFreeze = function (object) {
  Object.freeze(object);
  for (let key in object) Object.deepFreeze(object[key]);
};
