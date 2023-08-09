// Write the implmentation of the function multiplyNumbers so that the following code should run properly

function multiplyNumbers(...p) {
  let answer = 1;
  for (let i = 0; i < p.length; i++) {
    answer *= p[i];
  }
  return answer;
}
console.log(multiplyNumbers(1, 2, 3, 4, 5)); // expected result: 120
console.log(multiplyNumbers(9, 2, 7)); // expected result: 126

// Use the following api and get the data for all the available countries and provinces (use Fetch)
// const URL = "https://documenter.getpostman.com/view/10808728/SzS8rjbc";

const p = fetch("https://api.covid19api.com/countries")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));

// rest operator rest the remaining arguments in an array
// spread operator individuals the all arguments passed in an array
