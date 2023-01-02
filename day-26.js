//https://www.codewars.com/kata/sort-with-arrow-functions
//Sort with Arrow Functions
const OrderPeople = people => people.sort((a, b) => a.age - b.age);
//Moving Zeros To The End
//https://www.codewars.com/kata/52597aa56021e91c93000cb0/
function moveZeros(arr) {
  const arrWithZero = arr.filter(el => el === 0);
  const arrWithoutZero = arr.filter(el => el !== 0);
  return arrWithoutZero.concat(arrWithZero);
}
