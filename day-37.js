//Create iterator
//https://www.codewars.com/kata/5c743cec901022438549964a
const createIterator = (array) => {
  let index = 0
  return {
    next() {
      return {value: array[index++], done: index > array.length}
    },
    get index() {
      return (index <= array.length) ? index : array.length
    }
  }  
};
