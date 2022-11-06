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
//
//

//#29: methods of arrayObject---concat() and join()
//http://www.codewars.com/kata/5731861d05d14d6f50000626
function bigToSmall(arr) {
  const newArr = [].concat(...arr).sort((a, b) => b - a);
  return newArr.join(">");
}
