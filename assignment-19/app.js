// create a basic form in html which takes user's name, age, email, password and submits it
// - Clear the form after submission
// - Store the data submitted by the user in localStorage

document.getElementById("Info-form").addEventListener("submit", function (e) {
  // Get the value of the name field
  e.preventDefault();
  let name = document.getElementById("inputName").value;
  let age = document.getElementById("inputAge").value;
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPass").value;

  //Save the name in localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
});

// addEventListner("", function () {
//   // Get the value of the name field
//   let name = document.getElementById("name").value;

//   //Save the name in localStorage
//   localStorage.setItem("name", name);
// });
