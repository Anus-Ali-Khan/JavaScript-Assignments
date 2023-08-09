// (Note: use higher order array methods)

// Given an array of numbers create a new array with squares of the numbers
const numbers = Array(10)
  .fill(5)
  .map(() => parseInt(Math.random() * 100 + 5));

// console.log(numbers);
// const squareNum = numbers.map(function (x) {
//   return Math.pow(x, 2);
// });

// console.log(squareNum);

// Given a mixed array filter out the even numbers from the array
// const numbers = Array(10)
//   .fill(10)
//   .map(() => parseInt(Math.random() * 100 + 5));

// console.log(numbers);

// const evenNum = numbers.filter((number) => number % 2 === 0);
// console.log(evenNum);

// Given an array of objects having a property age on them print how many of them are eligible to get an NIC i.e their age is greater than or equal to 18

// const persons = Array(10)
//   .fill(10)
//   .map(() => ({
//     age: parseInt(Math.random() * 80 + 10),
//   }));
// console.log(persons);

// const isEligible = persons.filter((person) => person.age >= 18);
// console.log(isEligible, isEligible.length);

// Print on the screen whether all of the persons in the person array are eligible for NIC

// if (isEligible.length === persons.length) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Use the array of numbers from the first question and calculate the sum of all the numbers using the reduce function

const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// Use the array of numbers from the first question and print the minimum of all the numbers using the reduce function

const minvalue = numbers.reduce((a, b) => Math.min(a, b));
console.log(minvalue);

// Use the array of numbers from the first question and print the maximum of all the numbers using the reduce function

const maxvalue = numbers.reduce((a, b) => Math.max(a, b));
console.log(maxvalue);
