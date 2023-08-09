// Task (Study the following two topics on your own)
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Create a function which takes 3 arguments and return the Largest number among the 3
// use ternary operator for conditionals

// function largestArg(x, y, z) {
//   const arguments = [x, y, z];
//   arguments.sort();
//   console.log(arguments[2]);
// }
// largestArg(5, 4, 3);
// Take 2 numbers as input from the user and an operation which user wants to perform on those numbers then use the switch statement to implement it and alert the result

// const x = parseInt(prompt("Enter a number"));
// const y = parseInt(prompt("Enter a number"));
// const operation = prompt("Enter an operation");
// const lowerCase = operation.toLowerCase();
// switch (lowerCase) {
//   case "sum":
//     console.log(x + y);
//     break;
//   case "subtract":
//     console.log(x - y);
//     break;
//   case "product":
//     console.log(x * y);
//     break;
//   case "divide":
//     console.log(x / y);
//     break;
// }

var array = [
  [
    [1, [13, 14], 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, [[16, 17], 18]],
  ],
];

// extract out 17, 14, 18 using the indexing operator and save them in these variables
const seventeen = array[1][1][2][0][1];
const fourteen = array[0][0][1][1];
const eighteen = array[1][1][2][1];
console.log(seventeen);
console.log(fourteen);
console.log(eighteen);

// remove the elements one by one from the array2 and add them into array1 in such a way that the resultant array looks like this
// [1,2,3,4,5,6,7,8,9,10]
// hint(push, pop, shift, unshift);
const array1 = [5, 6, 7];
const array2 = [4, 8, 9, 3, 2, 1, 10];
const newArray = array1.concat(array2);
// console.log(newArray);
let array3 = newArray.sort(function (a, b) {
  return a - b;
});
console.log(array3);
