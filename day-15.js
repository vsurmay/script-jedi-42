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
//[JEDI LEVEL] #23: methods of arrayObject---push(), pop(), shift() and unshift()
//http://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr, d, n) {
  if (d === "left") {
    for (let i = 0; i < n; i++) {
      arr[2].push(arr[0].shift());
      arr[0].push(arr[1].shift());
      arr[1].push(arr[2].shift());
    }
    return arr;
  } else {
    for (let i = 0; i < n; i++) {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
    return arr;
  }
}
