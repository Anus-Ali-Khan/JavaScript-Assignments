// Take age as input from the user and alert 'allow' or 'deny' based on the conditions
// - the user's age is greater than or equal to 18 years (allowed)
// - the user's age is less than 18 (denied)

// let age = prompt("Enter your age");
// if (age >= 18) {
//   alert("allow");
// } else if (age < 18) {
//   alert("denied");
// }

// Take a number input from the user and alert the message based on the following conditions
// alert('Condition 1 fulfilled'): if the number is between 2 and 5 inclusive
// alert('Condition 2 fulfilled'): if the number is between 6 and 10 inclusive
// alert ('Condition 2 fulfilled'): if the number is greater than 10

// let number = prompt("Enter a Number");
// if (number >= 2 && number <= 5) {
//   alert("Condition 1 fulfilled");
// } else if (number >= 6 && number <= 10) {
//   alert("Condition 2 fulfilled");
// } else if (number > 10) {
//   alert("Condition 2 fulfilled");
// }

// Which opertor is used to check whether a property exists on that object
// Answer:
// hasOwnProperty();

// check whether the property 'property2' exists on the object
const exampleObject = {
  property1: "value1",
  property3: "value3",
};

console.log(exampleObject.hasOwnProperty("property2"));

// Comment what will be the result of the following conditional checks
// console.log(5 == 8);  false
// console.log(undefined == null); false
// console.log(0 == false); false
// console.log("2" != 2); false
// console.log(1 !== true); true
// console.log(undefined != null); true
// console.log("0" != false); true
// console.log(!false); true
// console.log(1 === true); true
// console.log(0 === 0); false
// console.log(1 != true); false
// console.log(0 !== false); true
// console.log(0 != false); false
// console.log("4" == 4); true
// console.log("0" === false); false
// console.log("0" == false); false
// console.log(0 === false);false
// console.log(1 == true); false
// console.log(7 != 7);  false
// console.log(!true); false
// console.log(undefined === null); false
// console.log(4 !== 2); true
// console.log("2" === 2);  false
// console.log("2" !== 2);true
// console.log(undefined !== null);.true
// console.log("0" !== false);true

// Take a number input from the user and log the table of that number

// let number = parseInt(prompt("Enter a Number"));
// for (let i = 0; i <= 10; i++) {
//   console.log(number * i);
// }

// Take 2 numbers as input from the user and alert whether the first number is completely divisible by second or not.

// let num1 = parseInt(prompt("Enter a Number"));
// let num2 = parseInt(prompt("Enter a Number"));

// if (num1 % num2 === 0) {
//   alert("completely divisible");
// } else {
//   alert("not divisible");
// }
