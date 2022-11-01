//Word to Binary
//https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  const arrayStr = str.split("");
  const result = [];
  for (const i of arrayStr) {
    let kods = i.charCodeAt().toString(2);
    if (kods.length < 8) {
      kods = "0" + kods;
    }
    result.push(kods);
  }
  return result;
}
//[JEDI LEVEL] Char Codes Calculation
//https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x) {
  const array = x.split("");
  const result = [];
  for (const i of array) {
    result.push(i.charCodeAt());
  }
  const total1 = result.join("");
  const total1Array = total1.toString().split("");
  const result2 = [];
  for (const i of total1Array) {
    if (i === "7") {
      const number = 1;
      result2.push(number);
    } else {
      result2.push(i);
    }
  }
  const total2 = result2.join("");
  const total2Array = total2.toString().split("");
  let total1Sum = 0;
  for (const i of total1Array) {
    total1Sum += Number(i);
  }
  let total2Sum = 0;
  for (const i of total2Array) {
    total2Sum += Number(i);
  }
  return total1Sum - total2Sum;
}
