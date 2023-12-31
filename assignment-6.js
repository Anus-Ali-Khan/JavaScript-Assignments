// NOTE: Use the slice and splice methods to complete all the tasks given in this assignment, no other method should be used
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Given an array of animals
const animals = ["tiger", "cow", "goat", "camel", "sheep"];

/*
  Q1: Slice array of all the herbivorous animals from the array
  expected result = ["cow", "goat", "camel", "sheep"]
*/

// console.log(animals.slice(1));

/*
  Q2: Make a copy of the original array and then remove the element goat from that copy
*/

// const copy = animals.slice(0);
// copy.splice(2, 1);
// console.log(copy);
/*
  Q3: Insert a new array in the array after 'camel' (i.e: at index 4)
 */

animals.splice(4, 0, []);
console.log(animals);

/*
  Q4: Replace the animals 
*/

// animals.splice(0, 5, "parrot", "sparrow", "lion", "leopard");
// console.log(animals);
/*
  Q5: Cut out second last element from the array using negative indexing
*/

// animals.splice(-2, 1);
// console.log(animals);
