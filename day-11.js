//Playing with Sets : Equal or Not ?
//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  if (s1.size !== s2.size) return false;
  const result = new Set();
  for (const i of s1) {
    result.add(i);
  }
  for (const i of s2) {
    result.add(i);
  }
  if (result.size === s1.size && result.size === s2.size) {
    return true;
  } else return false;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}
//[JEDI LEVEL] Operations with Sets
//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
  const setArray = new Set();
  for (const i of arr1) {
    setArray.add(i);
  }
  for (const i of arr2) {
    setArray.add(i);
  }
  const repeatSymbol = arr1.length + arr2.length - setArray.size;
  return [
    repeatSymbol,
    setArray.size - repeatSymbol,
    arr1.length - repeatSymbol,
    arr2.length - repeatSymbol,
  ];
}
