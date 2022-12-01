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

//Cylon Evolution
//http://www.codewars.com/kata/cylon-evolution
function Cylon(model){
   this.model = model;
}
Cylon.prototype.attack = () => "Destroy all humans!";
function HumanSkin(model){
   this.model = model;
}
HumanSkin.prototype = Cylon.prototype;
HumanSkin.prototype.constructor = HumanSkin;
HumanSkin.prototype.infiltrate = () => "Infiltrate the colonies";

//Call function using apply
//http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function(context, ...args) {
	return this.apply(context, args);
}
