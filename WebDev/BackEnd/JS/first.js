var a = 10;
var b = 2;
console.log(a);
console.log(b);
// Strings in JS
var fName = "Angela";
var lname = "yu";
console.log(fName.length);
console.log(fName + " " + lname);
console.log(fName.slice(0, 2));
console.log(fName.toUpperCase());
console.log(fName.toLowerCase());
// Arthimetic Operations in JS
console.log("Arthimetic Operations");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// Expressions in JS
var res = 3 * 5 + 2;
console.log(res);
var dog = 5;
var human = (dog - 2) * 4 + 21;
console.log(human)
var c = 9
var d = 10
c++;    //Increment
console.log(c);
c--;
console.log(c); // Decrement
console.log(c += d);
// Functions in JS
function hello() {       // defining a function
  console.log("hello bsdk");
}
hello();   // calling the function
function lifeInWeeks(age) {
  var left = 90 - age;
  var leftday = 365 * left;
  var leftweek = 52 * left;
  var leftmonth = 12 * left;
  console.log("You have " + leftday + " days, " + leftweek + " weeks, and " + leftmonth + " months left.");
}
lifeInWeeks(56);
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var nb = Math.floor(money/1.5);
  console.log("buy " + nb + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money%1.5;    // remainder
}
var change = getMilk(10);
console.log(change);
// BMI Calculator
function bmicalc(weight,height){
  return Math.round(weight/(height*height));
}
console.log(bmicalc(65,1.8));
// Pseudo Random number generator
var n = Math.random();
n = n*6; // it considers numbers till 6 (range is 0 and 5, you would never get 6)
n = Math.floor(n) + 1; // here we will get from 1 to 6.
console.log(n);
var age = 69
if(age == 20){
  console.log("poi chaduko")
}
else{
  console.log('ayna poi chaduko')
}
// difference between === and ==
var q = 1;
var w = '1';
console.log(q === w); // checks datatype
console.log(q == w);  // wtf is datatype??

