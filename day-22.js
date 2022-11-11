//Check your arrows
//https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

const anyArrows = (arrows) => arrows.some((item) => !item.damaged);

//[JEDI LEVEL] Currying functions: multiply all elements in an array
//https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(arr) {
  return function (n) {
    return arr.map((item) => item * n);
  };
}
