//Generators #1
//https://www.codewars.com/kata/basics-generators-number-1/javascript
function* generator() {
  let counter = 1;
  while (true) {
    const start = yield counter;
    counter = start || counter + 1;
  }
}
