// Given 2 strings, create a new string by concatenating the original string using the '+' operator and the concat method
const string1 = "Hello";
const string2 = " World";

// ANS

// 1)  let result = "Hello " + "World";
// let result = string1.concat(string2);
// console.log(result);

// Given a string, using loops print each character of the string on a new line
const loopsWithString = "Pakistan";

// ANS
// for (let i = 0; i < loopsWithString.length; i++) {
//   console.log(loopsWithString[i]);
// }

// How you will get the last character from a string
// let string = "Hello World";
// Answer:
// console.log(string[10]);

// What is the equivalent method for the index operator '[]' to get the character of a certain position from a string
// Ans
// console.log(string.charAt(5));

// Given the following string:
// let string = "Pakistan";
// How you will get the ascii code of the letter at the index 4
// console.log(string.charCodeAt(4));

// Given an array of filenames, iterate over the array & print true on the console if the file is a txt file
// const files = [
//   "document.txt",
//   "hello.docx",
//   "names.xlsx",
//   "profile.txt",
//   "sample.ppt",
// ];
// files.forEach(function (file) {
//   const txt = file.split(".");
//   txt.forEach(function (isTrue) {
//     if (isTrue == "txt") {
//       console.log(true);
//     }
//   });
// });

// Take an string as input from the user and print whether the string contains a vowel or not and also tell at which index the vowel occurs at first
let string = prompt("Type a word");
const inputWord = string.split("");
inputWord.forEach(function (stringChar, index) {
  const vowels = ["a", "e", "i", "o", "u"];
  vowels.forEach(function (char) {
    if (stringChar === char) {
      console.log("present");
      console.log(index);
    }
  });
});

// Given an string replace the character 'a' with 'e' and 'll' with 'oo'
//ANS:
// const stringToChange = "Hello World as Javascript";
// const result = stringToChange.replace("a", "e").replace("ll", "oo");
// console.log(result);

// Given an string like this -> '12:00:00'
// Extract out the hrs, minutes and seconds from it.
// let time = "12:00:00";
// let timeSep = time.split(":");
// console.log(timeSep);

// Take an string as input from user and also take a number as count and repeat the entered string count times and alert it
// Example:
// Entered string: 'Hello'
// Entered count : 3
// Result        : 'HelloHelloHello'
// Note: Use the builtin method to implement it

// let string = prompt("Enetr a string");
// let count = prompt("Enter count ");

// console.log(string.repeat(count));
