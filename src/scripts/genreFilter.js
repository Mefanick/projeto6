export { addClickOnButton, genreFilter}

import { renderElements } from "./albumCreation";

//import renderElements, 

function addClickOnButton() {
  const button = document.querySelectorAll(".genre__button");
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = (event) => {
      let targetButton = event.target;
      if (targetButton.classList.contains("option")) {
        return;
      } else {
        let option = document.querySelector(".option");
        option.classList.toggle("option");
        targetButton.classList.add("option");
      }
      genreFilter();
    };
  }
}

async function genreFilter() {
  const button = document.querySelectorAll(".genre__button");
  var valor = "";
  for (let i = 0; i < button.length; i++) {
    if (button[i].classList.contains("option")) {
      valor = button[i].value;
    }
  }
  var newArray = [];
  const options = {
    method: "GET",
    headers: { "User-Agent": "insomnia/10.1.1" },
  };
  const response = await fetch(
    "https://openmusic-fake-api.onrender.com/api/musics",
    options
  );
  const promise = response.json();
  const inputRange = document.querySelector("#rangeInput");

  promise.then((promise) => {
    for (let i = 0; i < promise.length; i++) {
      if (inputRange.value < parseInt(promise[i].price)) {
        if (promise[i].genre.includes(valor) || valor == "todos") {
          newArray.push(promise[i]);
        }
      }
    }
    console.log(newArray);
    renderElements(newArray);
  });
}
