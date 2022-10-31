//Playing with Sets : Equal or Not ?
//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  if (s1.size !== s2.size) return false;
  const result = new Set();
  for (const i of s1) {
    result.add(i);
  }
  for (const i of s2) {
    result.add(i);
  }
  if (result.size === s1.size && result.size === s2.size) {
    return true;
  } else return false;
}

function notEqual(s1, s2) {
  if (s1.size !== s2.size) return true;
  const result = new Set();
  for (const i of s1) {
    result.add(i);
  }
  for (const i of s2) {
    result.add(i);
  }
  if (result.size === s1.size && result.size === s2.size) {
    return false;
  } else return true;
}

