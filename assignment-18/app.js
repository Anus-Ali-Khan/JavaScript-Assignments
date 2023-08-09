// You have to use the following api
const URI = "https://restcountries.eu/rest/v2/all/";

// fetch the data and create cards and show some details about the countries that is coming from the api on the cards in html (you can choose the details what you want to show by yourself, atleast include 2 to 3 properties about that country)

const p = fetch("https://api.covid19api.com/countries")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log((cards = data.slice(0, 10))));

cards.json.stringify();
// const body = document.body;
// const div = document.createElement("div");
// div.innerHTML = cards;
// body.append(div);

for (let i = 0; i < length; i++) {
  const body = document.body;
  const div = document.createElement("div");
  div.innerHTML = data.slice(0, 10);
  body.append(div);
}
