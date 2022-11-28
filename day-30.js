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

//Call function using apply
//http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function(context, ...args) {
	return this.apply(context, args);
}
