//Singleton pattern
//https://www.codewars.com/kata/singleton-pattern/train/javascript
function Singleton() {
  if (Singleton.exist) {
    return Singleton.instance;
  }
  Singleton.instance = this;
  Singleton.exist = true;
};
//[JEDI LEVEL] Simple Web Framework #1: Create a basic router
//https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
function Router() {}
Router.prototype.bind = function (path, method, func) {
  this[path] ? (this[path][method] = func) : (this[path] = { [method]: func });
};
Router.prototype.runRequest = function (path, method) {
  return this[path] ? this[path][method]() : "Error 404: Not Found";
};
