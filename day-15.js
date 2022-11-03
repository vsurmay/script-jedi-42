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
