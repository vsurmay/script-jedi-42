//#24: methods of arrayObject---splice() and slice()
//http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  const arrResult = [];
  for (let i = 0; i < arr.length; i += 3) {
    arrResult.push(arr.slice(i, i + 3));
  }
  const result = [];
  for (const i of arrResult) {
    let sum = 0;
    for (const k of i) {
      sum += k;
    }
    result.push(sum);
  }
  return result;
}
