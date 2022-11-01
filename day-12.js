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
