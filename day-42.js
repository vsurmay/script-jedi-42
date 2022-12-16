//
//
function scramble(str1, str2) {
  const arr1 = [...str1];
  const arr2 = [...str2];
  const obj1 = {};
  const obj2 = {};
  for (let i of arr1) {
    obj1[i] !== undefined ? (obj1[i] += 1) : (obj1[i] = 1);
  }
  for (let i of arr2) {
    obj2[i] !== undefined ? (obj2[i] += 1) : (obj2[i] = 1);
  }
  for (let key in obj2) {
    if (obj2[key] > obj1[key] || obj1[key] == undefined) return false;
  }
  return true;
}
