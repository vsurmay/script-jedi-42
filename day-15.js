//
//
function shuffleIt(arr, ...swapArr) {
  for (let i = 0; i < swapArr.length; i++) {
    let firstNum = swapArr[i][0];
    let secondNum = swapArr[i][1];
    [arr[firstNum], arr[secondNum]] = [arr[secondNum], arr[firstNum]];
  }
  return arr;
}
