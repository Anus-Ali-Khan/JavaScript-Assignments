// Create a function named 'logNameAndAge' and pass name and age as params and log them inside the function so that the following code should work
// function logNameAndAge(name, age) {
//   console.log(name, age);
// }
// logNameAndAge("Hasham", 20);
// logNameAndAge("John", 33);

// Create a function to add, subtract, divide, multiply 2 numbers based on the numbers and the operation passed as the parameter
// the following code should work afterwards

// function calculate(x, y, operation) {
//   switch (operation) {
//     case "+":
//       console.log(x + y);
//       break;
//     case "*":
//       console.log(x * y);
//       break;
//     case "-":
//       console.log(x - y);
//       break;
//     case "/":
//       console.log(x / y);
//       break;
//   }
// }
// calculate(1, 2, "+");
// calculate(5, 9, "*");
// calculate(22, 8, "-");
// calculate(17, 3, "/");

// Write what will happen in the after running the following code and also explain why.

// someFunction();
// anotherFunction();

const someFunction = function () {
  console.log("Function was called!");
};

function anotherFunction() {
  console.log("another function was called!");
}

// Answer:
// did not run because function is called before it was formed.
