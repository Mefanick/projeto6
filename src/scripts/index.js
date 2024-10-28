
import albumList from "./albunsDatabase.js";


import { modeSwitch } from "./modeSwitch.js";
import { addClickOnButton, genreFilter } from "./genreFilter.js";
import { applyInputRangeStyle } from "./inputFilter.js";

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
