// Use the tag based selector to select the button

let button = document.getElementsByTagName("button");
console.log(button);

// use the id based selector to select the div with id = special

let sep = document.getElementById("special");
// sep.style.color = "red";
console.log(sep);

// use the class based selector to select the paragraphs with the class = para
let sel = document.getElementsByClassName("para");
console.log(sel);

Array.from(sel).forEach((sel) => {
  console.log(sel);
  sel.style.color = "blue";
});

// use the query based selector to select all the elements that have an attribute named 'custom' and its value is set to 'selectable' (hint: revise css attribute based selectors)

let custom = document.querySelectorAll("selectable");

console.log(custom);
Array.from(custom).forEach((custom) => {
  console.log(custom);
  custom.style.color = "red";
});
