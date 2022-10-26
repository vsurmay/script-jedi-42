//Syntax task
//https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(bod, tail) {
  
  bod = bod.substr(bod.length-(tail.length));
  
  if (bod === tail) {
    return true;
  } else {
    return false;
  }
 }   
//Do I get a bonus
//https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
    if (bonus) {
        return '£' + (salary * 10);
    } else {
        return '£' + salary;
    }
}
//Automorphic number
//https://www.codewars.com/kata/5a58d889880385c2f40000aa
function automorphic(n){
  if (Math.pow(n, 2).toString().endsWith(n.toString())) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}
