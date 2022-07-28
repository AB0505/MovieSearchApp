import "./style.css";
import { apiKey } from "./key.js";

/*  declaire variable */

const app = document.querySelector("#app");

/* info that comes back from database */

app.innerHTML = `
  <h1>Movie Search</h1>
`;
/* prevents error from coming back */

const parent = document.querySelector("#results-container");
while (parent.firstChild) {
  parent.removeChild(parent.firstChild);
}

const search = (ev) => {
  ev.preventDefault();

  /* used document.querySelect to get certain info from url */

  const title = document.querySelector("#title").value;
  const year = document.querySelector("#year").value;
  const plot = document.querySelector("#plot").value;
  const url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=${plot}&apikey=${apiKey}`;

  console.log(url);

  /* Get specific movie info from API result */

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      /* specific info  */

      const movieInfo = document.getElementById("results-container");
      movieInfo.innerHTML = `
    <div>
    <h2>${data.Title}</h2>
    <h3>${data.Year}</h3>
    <img src="${data.Poster}" alt= "poster picture" />
    <p>${data.Plot}</p>
    <p>${data.Released}</p>
    <p>${data.Ratings[0].Source}: ${data.Ratings[0].Value}</p>
    </div>
    `;
      app.append(movieInfo);

      console.log(data.Title);
      console.log(data.Year);
      console.log(data.Poster);
      console.log(data.Plot);
      console.log(data.Ratings[0].source);
      console.log(data.Released);
      console.log("-----------------");
    });
};

/* waiting for inputted info into form */

document.querySelector("form").addEventListener("submit", search);