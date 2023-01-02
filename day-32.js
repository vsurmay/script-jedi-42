//"this"" is a problem
//http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

//""this"" is an other problem
//https://www.codewars.com/kata/this-is-an-other-problem
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(val) {
    const redex = /\w+\s\w+/;
    if (redex.test(val)) [this.firstName, this.lastName] = val.split(" ");
  }
}
