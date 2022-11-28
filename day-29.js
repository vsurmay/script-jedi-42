//How new works
//https://www.codewars.com/kata/how-new-works
const myObj = Object.create(MyObject.prototype);
MyObject.bind(myObj)();

//Replicate new
//http://www.codewars.com/kata/replicate-new
function nouveau (Constructor, ...args) {
  const inst = Object.create(Constructor.prototype);
  const result = Constructor.apply(inst, args);
  if (result === Object(result)) {
    return result;
  } else {
    return inst;
  }
}
