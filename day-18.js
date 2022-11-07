//#30: methods of arrayObject---reduce() and reduceRight()
//http://www.codewars.com/kata/573156709a231dcec9000ee8
function tailAndHead(arr){
const arrFistLast = arr.map((item, index) => {
  const i = item.toString();
  const valueFirstLast =
    index == 0
      ? i[i.length - 1]
      : index == arr.length - 1
      ? i[0]
      : i[0] + i[i.length - 1];
  return valueFirstLast;
});
const newArr = [];
for (let i = 0; i < arrFistLast.length; i++) {
  if (i === 0) {
    newArr.push(Number(arrFistLast[i]) + Number(arrFistLast[i + 1][0]));
  } else if (i === arrFistLast.length - 2) {
    continue;
  } else if (i === arrFistLast.length - 1) {
    newArr.push(Number(arrFistLast[i - 1][1]) + Number(arrFistLast[i]));
  } else {
    newArr.push(Number(arrFistLast[i][1]) + Number(arrFistLast[i + 1][0]));
  }
}
const result = newArr.reduce((a, b) => a * b);
return result;
}
//#31: methods of arrayObject---isArray() indexOf() and toString()
//http://www.codewars.com/kata/5732b0351eb838d03300101d
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  const result =
    arr.includes(5) && arr.includes(13)
      ? "It's a black array"
      : "It's a white array";
  return result;
}
//[JEDI LEVEL] #36 methods of Math -- random()
//https://www.codewars.com/kata/5735956413c2054a680009ec
function rndCode() {
  const result = [];
  const letter = "ABCDEFGHIJKLM";
  for (let i = 0; i < 2; i++) {
    result.push(letter[~~(letter.length * Math.random())]);
  }
  const number = "1234567890";
  for (let i = 0; i < 4; i++) {
    result.push(number[~~(number.length * Math.random())]);
  }
  const sumvols = "~!@#$%^&*";
  for (let i = 0; i < 2; i++) {
    result.push(sumvols[~~(sumvols.length * Math.random())]);
  }
  return result.join("");
}
