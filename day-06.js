//Maximum Multiple
//https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  const n = Math.floor(bound / divisor);
  return n * divisor;
}
//Is he gonna survive?
//https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  if (bullets / 2 >= dragons) {
      return true;
  } else {
      return false;
  }
}
//5 without numbers:
//https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {
  const str = 'fffff';
  return str.length;
}
