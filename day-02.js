// Basic data types--Number
// http://www.codewars.com/kata/571edd157e8954bab500032d
let v1 = 50;
let v2 = 100;
let v3 = 150;
let v4 = 200;
let v5 = 2;
let v6 = 250;

function equal1(){
  let a = v1;   
  let b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3 ; //set number value to a
  let b = v1 ; //set number value to b
  return a - b;
}

function equal3(){
  let a = v5 ; //set number value to a
  let b = v1 ; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4 ; //set number value to a
  let b = v5; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6 ; //set number value to a
  let b = v3 ; //set number value to b
  return a % b;
}

// Basic data types--String
// http://www.codewars.com/kata/571edea4b625edcb51000d8e

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// Basic data types--Array
// http://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr
}

// Basic data types--Object
// http://www.codewars.com/kata/571f1eb77e8954a812000837

function animal(obj){
  return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs."
}

