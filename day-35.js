//Object Prototypes
//https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes

Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";
//Class-Like Objects
//https://www.codewars.com/kata/javascript-class-like-objects

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
//[JEDI LEVEL] Power of bind
//http://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
const fn = this;
  return function(...args) {
    if (this === global) {
      return fn.call(ctx, args);
    } else {
      return fn.call(this, args);
    }  
  }
};
