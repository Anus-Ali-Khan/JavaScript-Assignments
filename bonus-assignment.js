// Write the implementation the following function which takes an argument (number) and returns the factorial of it

const factorial = (n) => {
  if (n > 0) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
};

console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(1));

// Write the implementation of the following function which takes an argument (string) and returns the number of vowels present in it

const numberOfVowels = (s) => {
  const array = s.split("");

  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  array.forEach(function (isPresent) {
    if (vowels.includes(isPresent)) {
      counter++;
    }
  });
  return counter;
};

console.log(numberOfVowels("hello world"));
console.log(numberOfVowels(""));
console.log(numberOfVowels("niceee"));
console.log(numberOfVowels("qwrtypsdfghjklzxcvbnm"));

// Write the implementation of the following function which takes an object and returns the number of properties on it

const numberOfProperties = (obj) => {
  if (typeof obj === "object") {
    return (count = Object.keys(obj).length);
  } else {
    return 0;
  }
};
console.log(numberOfProperties({}));
console.log(numberOfProperties({ name: "John", age: "nice" }));
console.log(numberOfProperties(window));

// Write the implmentation of the following function which takes an object and a name of a property (string) and removes the property from the object if it exists then returns the object

const removePropertyIfExists = (obj, prop) => {
  if (typeof obj === "object" || obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return obj;
  }
};

const newObject = removePropertyIfExists(
  { name: "Javascript", somethingSerious: "foo" },
  "bar"
);
const anotherNewObject = removePropertyIfExists(
  { name: "Javascript", somethingSerious: "foo" },
  "name"
);

console.log(newObject);
console.log(anotherNewObject);
