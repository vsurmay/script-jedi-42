//#22: Unlock new skills--Arrow function,spread operator and deconstruction
//http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
function shuffleIt(arr, ...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    let numFirst = arrays[i][0];
    let numSecond = arrays[i][1];
    [arr[numFirst], arr[numSecond]] = [arr[numSecond], arr[numFirst]];
  }
  return arr;
}
//loopArray
//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/
function loopArr(arr, direction, steps) {
  const arrays = arr;
  if (direction === "right") {
    for (let i = 0; i < steps; i++) {
      arrays.unshift(arrays.pop());
    }
    return arrays;
  } else {
    for (let i = 0; i < steps; i++) {
      arrays.push(arrays.shift());
    }
    return arrays;
  }
}
