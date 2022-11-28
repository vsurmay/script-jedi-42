//SantaClausable Interface
//http://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
  if (
    typeof obj.sayHoHoHo == "function" &&
    typeof obj.distributeGifts == "function" &&
    typeof obj.distributeGifts == "function"
  ) {
    return true;
  } else {
    return false;
  }
}
//
//
