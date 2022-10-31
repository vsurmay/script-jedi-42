//Word to Binary
//https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  const s = str.split("");
  const result = [];
  for (const i of s) {
    let k = i.charCodeAt().toString(2);
    if (k.length < 8) {
      k = "0" + k;
    }
    result.push(k);
  }
  return result;
}
