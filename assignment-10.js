// Create a new promise which will resolve after 5 seconds with a string value

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 5000);
});
p.then((message) => {
  console.log("This is in the then " + message);
});

// Create a new promise which will be rejected after 3 seconds with a new Error

let q = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Fail");
  }, 3000);
});
q.catch((message) => {
  console.log("This is in the catch " + message);
});

// Also write the code to handle and print the values after completion of the promises created above
