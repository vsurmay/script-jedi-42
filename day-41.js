//Nuclear Missile Manager
//https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript
function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}
//[JEDI LEVEL] The Supermarket Queue
//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
function queueTime(customers, n) {
  if (customers.length == 0) {
    return 0;
  }
  if (n > customers.length) {
    return Math.max(...customers);
  }
  const multiArr = [];
  for (let i = 0; i < n; i++) {
    multiArr.push(customers[i]);
  }
  for (let i = n; i < customers.length; i++) {
    const min = Math.min(...multiArr);
    const indexMin = multiArr.indexOf(min);
    multiArr[indexMin] += customers[i];
  }
  return Math.max(...multiArr);
}
