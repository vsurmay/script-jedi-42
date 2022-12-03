//
//
Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";
//
//
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
