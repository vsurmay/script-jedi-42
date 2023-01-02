//Scramblies
//https://www.codewars.com/kata/55c04b4cc56a697bb0000048
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
//[JEDI LEVEL] Two Sum
//https://leetcode.com/problems/two-sum/
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const indexSecondNum = nums.indexOf(target - nums[i], i + 1);
    if (secondNum !== -1) return [i, indexSecondNum];
  }
}
