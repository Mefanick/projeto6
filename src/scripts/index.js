import albumList from "./albunsDatabase.js";

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
  });
}

function createAlbum(index) {
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

  li.classList.add("album__box");

  img.src = albumList[index].img;
  div.classList.add("album__comment--box");

  titleDiv.classList.add("album__comment--title");
  h3.innerText = albumList[index].title;

  genereDiv.classList.add("album__comment--genre");
  p1.innerText = albumList[index].band;
  p1.classList.add("text");
  p2.innerText = albumList[index].genre;
  p2.classList.add("text");

  priceDiv.classList.add("album__comment--price");
  button.classList.add("album__button");
  h4.innerText = "R$" + albumList[index].price;
  button.innerText = "Comprar";
}
function renderElements(albuns) {
  const ul = document.querySelector("#albunsContainer");
  for (let i = 1; i <= albuns.length; i++) {
    let li = document.querySelector(".album__box");
    li.remove();
  }
  for (let i = 0; i < albuns.length; i++) {
    createAlbum(i);
  }
}

function addClickOnButton() {
    const button = document.querySelectorAll('.genre__button')
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
        }
    }
}

function modeSwitch() {
  const html = document.documentElement;
  const img = document.querySelector(".button__image")
  if (html.classList.contains("light")) {
    html.classList.toggle("light");
    html.classList.toggle("dark");
    img.setAttribute("src", './src/assets/icons/sun-icon.svg')
  } else {
    html.classList.toggle("dark");
    html.classList.toggle("light");
    img.setAttribute("src", './src/assets/icons/moon-icon.svg')
  }
}

function routine() {
  applyInputRangeStyle();
  renderElements(albumList);
  const switchButton = document.querySelector(".header__button");
  switchButton.addEventListener("click", () => {
    modeSwitch();
  })
  addClickOnButton();
}
routine();
