//Duplicate arguments
//http://www.codewars.com/kata/duplicate-arguments

function solution(...arg) {
  const argSet = new Set(arg);
  const result = arg.length === argSet.size ? false : true;
  return result;
}
