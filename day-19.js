//#37: Unlock new weapon---RegExp Object 
//http://www.codewars.com/kata/5735e39313c205fe39001173
function countAnimals(animals,count){
  const newArr = [];
  for (const i of count) {
    newArr.push((animals.match(new RegExp(i, "g"))||[]).length);
  }
  return newArr
}
//#38: Regular Expression--""^"",""$"", ""."" and test()
//http://www.codewars.com/kata/573975d3ac3eec695b0013e0
function findSimilarity(str, word) {
  const arr = str.split(" ");
  const filterArr = arr.filter((i) => i.length <= word.length);
  const resultArr = [];
  for (let i = 0; i<filterArr.length; i++) {
    if (filterArr[i][0] == word[0] && filterArr[i].slice(-1) == word.slice(-1) && word.length == filterArr[i].length) {
      resultArr.push(filterArr[i])
    }
  }
  return resultArr.join(' ')
}
