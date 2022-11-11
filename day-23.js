//Unpacking arguments
//http://www.codewars.com/kata/unpacking-arguments

function spread(func, args) {
  return func(...args);
}

//For the sake of argument
//http://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...arg) {
  const argIsNum = arg.filter((el) => typeof el === "number");
  const result = argIsNum.length === arg.length ? true : false;
  return result;
}
