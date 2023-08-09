// Q1: Explore the Math module in javascript and write use cases of all the methods that you explored
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Example:
// Math.random()
// console.log(Math.random()); // gives a random number between 0 and 1

// Q2: Take a number input from the user and print its table on the console

// let number = parseInt(prompt("Enter a number"));

// for (let i = 0; i <= 10; i++) {
//   console.log(number * i);
// }

// Q3: Iterate on the given array using nested for loops and print each element on the console
const array = new Array(parseInt(Math.random() * 20 + 5))
  .fill(5)
  .map(() =>
    new Array(parseInt(Math.random() * 10))
      .fill(5)
      .map(() => (Math.random() * 20).toFixed(2))
  );

// console.log(array);
// array.forEach(function (seperate) {
//   console.log(seperate);
//   seperate.forEach(function (individuals) {
//     console.log(individuals);
//   });
// });

// Create new object and iterate over all the properties and log the property name and its value on the console

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st.",
    city: "Boston",
    state: "MA",
  },
};

const propertyNames = Object.keys(person);
console.log(propertyNames);

const propertyValues = Object.values(person);
console.log(propertyValues);

const entries = Object.entries(person);
console.log(entries);

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
