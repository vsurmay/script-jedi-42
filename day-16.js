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
//[JEDI LEVEL] #25: methods of arrayObject---reverse() and sort()
//http://www.codewars.com/kata/572df796914b5ba27c000c90
function sortIt(arr) {
  const copyArr = [...arr];
  copyArr.sort((a, b) => {
    let numa = 0;
    let numb = 0;
    for (i of arr) {
      if (i === a) numa++;
      if (i === b) numb++;
    }
    if (numa > numb) return 1;
    if (numa < numb) return -1;
    if (numa === numb) return b - a;
  });
  return copyArr;
}
//#26: methods of arrayObject---map()
//http://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  const result = arr.map((item) => {
    const n = Math.floor(item.length / 2);
    if (item.length % 2) {
      const itemArr = item.split("");
      itemArr.splice(n, 1, "|");
      return itemArr.join("");
    } else {
      const itemArr = item.split("");
      itemArr.splice(n, 0, "|");
      return itemArr.join("");
    }
  });
  return result;
}
