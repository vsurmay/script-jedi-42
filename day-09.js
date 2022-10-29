//#16: Methods of String object--slice(), substring() and substr()
//http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  const arrLength = [];
  for (const i of arr) {
      if (i.length > 0) {
          arrLength.push(i.length);
      }
  }
  const arrLengthMin = Math.min(...arrLength);
  const arrResult = [];
  for (const i of arr) {
      if (i.length >= arrLengthMin) {
          arrResult.push(i.slice(0, arrLengthMin));
      }
  }
  return arrResult;
}
//#17: Methods of String object--indexOf(), lastIndexOf() and search(
//http://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(str, c) {
  const first = str.indexOf(c);
  const last = str.lastIndexOf(c);
  if (first === -1 && last === -1) {
    return -1;
  } else {
    return last - first;
  }
}
