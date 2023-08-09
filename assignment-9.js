// Use the concept of closures and create a function which returns an object with 2 properties of name and age and their setter and getter functions

// const func = () => {
//   return {
//     name: "Anus Ali Khan",
//     age: 20,

//     get getage() {
//       return this.age;
//     },

//     get getname() {
//       return this.name;
//     },

//     set setname(n) {
//       this.name = n;
//     },

//     set setage(x) {
//       this.age = x;
//     },
//   };
// };

// const person = func();
// person.setname = "John";

// console.log(person);

// function createMultiplier(multiplyBy) {
//   return function (num) {
//     return num * multiplyBy;
//   };
// }

// use the createMultiplier function to create a multiplier for numbers 4 and 5

// const number = createMultiplier(5);
// const mul = number(6);
// console.log(mul);

// create an object and convert it into string and then convert it back to object using json stringify and parse functions
const person = {
  name: "Anus Ali Khan",
  age: 23,
  city: "Karachi",
};

const myJson = JSON.stringify(person);
console.log(myJson);

const obj = JSON.parse(myJson);
console.log(obj);
