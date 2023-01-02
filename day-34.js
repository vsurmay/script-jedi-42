//Adam and Eve
//https://www.codewars.com/kata/basic-subclasses-adam-and-eve/
class God {
  static create() {
    return [new Man(), new Woman()];
  }
}
class Human {
  constructoe(name) {
    this.name = name;
  }
}
class Man extends Human {
  constructor(name) {
    super(name);
  }
}
class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

//Labrador 
//https://www.codewars.com/kata/56ff9b53140fcca90b000530/
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}
//Classy Classes
//https://www.codewars.com/kata/55a144eff5124e546400005a
class Person {
  constructor(name, age) {
  this.name = name;
  this.age = age
  }
  
  get info() {
    return `${this.name}s age is ${this.age}`
  }
}
