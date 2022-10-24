//#6: Basic data types--Boolean and conditional statements if..else
//http://www.codewars.com/kata/571f832f07363d295d001ba8
function trueOrFalse(val){
  if (val) {
  return 'true';             
  } else {
    return 'false'
  }  
}
//if..else and ternary operator
//http://www.codewars.com/kata/57202aefe8d6c514300001fd
function saleHotdogs(n){
  if (n < 5) {
    return 100*n;
    } else if (n >= 5 && n < 10) {
    return 95*n;
  } else {
    return 90*n;
  }
}
//Conditional statement--switch
//http://www.codewars.com/kata/572059afc2f4612825000d8a
function howManydays(month){
  var days;
  switch (month){
  case 2:
    days = 28;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  default:
    days = 31;
  }
  return days;
}
