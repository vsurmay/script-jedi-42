//#27: methods of arrayObject---filter()
//http://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  return {
    S: scores.filter((s) => {
      return s === 100;
    }).length,
    A: scores.filter((s) => {
      return s < 100 && s >= 90;
    }).length,
    B: scores.filter((s) => {
      return s < 90 && s >= 80;
    }).length,
    C: scores.filter((s) => {
      return s < 80 && s >= 60;
    }).length,
    D: scores.filter((s) => {
      return s < 60 && s >= 0;
    }).length,
    X: scores.filter((s) => {
      return s < 0;
    }).length,
  };
}
//[JEDI LEVEL] #28: methods of arrayObject---every() and some()
//http://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].toString().split("").reverse().join("") === arr[i + 1].toString()
    )
      return [arr[i], arr[i + 1]];
  }
  return [-1, -1];
}

//#29: methods of arrayObject---concat() and join()
//http://www.codewars.com/kata/5731861d05d14d6f50000626
function bigToSmall(arr) {
  const newArr = [].concat(...arr).sort((a, b) => b - a);
  return newArr.join(">");
}
