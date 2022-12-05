//
//
Array.prototype.reduce = function (process, initial) {
  let arr = this;
  let acc = initial || arr[0];
  for (let i = initial ? 0 : 1; i < arr.length; i++) {
    acc = process(acc, arr[i], i);
  }
  return acc;
};
