
import albumList from "./albunsDatabase.js";

import { modeSwitch } from "./modeSwitch.js";
import { applyInputRangeStyle } from "./inputFilter.js";


function applyInputRangeStyle() {
  const inputRange = document.querySelector("#rangeInput");
  inputRange.addEventListener("input", (event) => {
    const number = document.querySelector("#price");
    const currentInputValue = event.target.value;
    const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
    inputRange.style.background = `linear-gradient(to right, 
        var(--brand-1) ${runnableTrackProgress}%, 
        var(--color-gray-5) ${runnableTrackProgress}%)`;
    number.innerText = `R$ ${currentInputValue}`;
    genreFilter();
  });
} 


async function createAlbum(index) {
  const ul = document.querySelector("#albunsContainer");
  const li = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const titleDiv = document.createElement("div");
  const genereDiv = document.createElement("div");
  const priceDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const h4 = document.createElement("h4");
  const button = document.createElement("button");

  ul.appendChild(li);
  li.appendChild(img);
  li.appendChild(div);
  div.appendChild(titleDiv);
  div.appendChild(genereDiv);
  div.appendChild(priceDiv);
  titleDiv.appendChild(h3);
  genereDiv.appendChild(p1);
  genereDiv.appendChild(p2);
  priceDiv.appendChild(h4);
  priceDiv.appendChild(button);

  const options = {
    method: "GET",
    headers: { "User-Agent": "insomnia/10.1.1" },
  };

  const response = await fetch(
    "https://openmusic-fake-api.onrender.com/api/musics",
    options
  );

  const promise = response.json();
  const array = [];
  promise.then((promise) => {
    for (let i = 0; i < promise.length; i++) {
      array[i] = promise[i];
    }

    img.src = array[index].img;
    h3.innerText = array[index].title;
    p1.innerText = array[index].band;
    p2.innerText = array[index].genre;

    h4.innerText = "R$" + array[index].price;

    if (array[index].genre.indexOf(" ") == -1) {
      li.classList.add(array[index].genre.toLowerCase());
    } else {
      var genreAmount = 0;
      for (let i = 0; i < array[index].genre.length; i++) {
        if (array[index].genre[i] == " ") {
          genreAmount++;
        }
      }
      var string = array[index].genre.toLowerCase();
      var inato = 0;
      for (let i = 0; i <= genreAmount; i++) {
        var novaString = "";
        while (string[inato] != " ") {
          novaString = `${novaString}${string[inato]}`;
          inato++;
          if (inato >= string.length) {
            break;
          }
        }
        li.classList.add(novaString);
        string = string.replace(" ", "");
      }
    }
  });

  li.classList.add("album__box");

  div.classList.add("album__comment--box");

  titleDiv.classList.add("album__comment--title");

  genereDiv.classList.add("album__comment--genre");

  p1.classList.add("text");

  p2.classList.add("text");

  priceDiv.classList.add("album__comment--price");
  button.classList.add("album__button");

  button.innerText = "Comprar";
}
function renderElements(albuns) {
  const ul = document.querySelector("#albunsContainer");
  const li = document.querySelectorAll(".album__box");
  for (let i = 0; i < li.length; i++) {
    li[i].remove();
  }
  for (let i = 0; i < albuns.length; i++) {
    console.log(albuns[i].id);
    createAlbum(albuns[i].id - 1);
  }
}
 

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



async function routine() {
  const options = {
    method: "GET",
    headers: { "User-Agent": "insomnia/10.1.1" },
  };
  const response = await fetch(
    "https://openmusic-fake-api.onrender.com/api/musics",
    options
  );
  const promise = response.json();
  applyInputRangeStyle();
  const switchButton = document.querySelector(".header__button");
  switchButton.addEventListener("click", () => {
    modeSwitch();
  });
  addClickOnButton();
}
routine();
