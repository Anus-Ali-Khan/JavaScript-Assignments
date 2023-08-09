// Refer to this codepen: https://codepen.io/muhammad-hasham-khalid/pen/abpjeEy

/*
  This codepen basically contains a textarea and some javascript is being used to display the WORD count of the text area and also limit the user to only enter 200 words maximum
*/

// You have to study the codepen given above and implement it for
// - letter count <= 200
// - vowels count <= 200
const wordCount = document.getElementById("wordCount");
const vowelCount = document.getElementById("vowelCount");
const text = document.getElementById("text");

text.addEventListener("input", (e) => {
  const count = e.target.value.split("").length;
  const letter = e.target.value.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  letter.forEach(function (ispresent) {
    if (vowels.includes(ispresent)) {
      counter++;
    }
  });

  // if (count <= 200 ) {
  //   // text.value = e.target.value;
  //   wordCount.textContent = count;
  // } else {
  //   const values = e.target.value.trim().split("").slice(0, 200);
  //   text.value = values.join("");
  // }

  if (counter <= 200) {
    vowelCount.textContent = counter;
  } else {
    const values = e.target.value.trim().split("").slice(0, 200);
    text.value = values.join("");
  }
});
