// Create two buttons
// - one to start a counter which will log the current time in the console after every 1 second
// - second button will be used to stop the timer
const Element = document.getElementById("Current Time");

let myInterval;

function Start() {
  myInterval = setInterval(() => {
    let currentDate = new Date();
    let time =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    Element.innerText = time;
  }, 1000);
}

function Stop() {
  clearInterval(myInterval);
}

document.getElementById("Start").addEventListener("click", Start);
document.getElementById("Stop").addEventListener("click", Stop);

// Use fetch to get the data from the following api and print the first 10 results on the console
// https://jsonplaceholder.typicode.com/todos

const promise = fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data.slice(0, 10)));

// get, post, delete, put(update)

const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
