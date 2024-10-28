export { applyInputRangeStyle , applyPriceFilter};

import { genreFilter } from "./genreFilter.js";

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
function applyPriceFilter(){
  const priceButton = document.querySelector("#priceRangeButton");
  priceButton.addEventListener ("click", (event) => {
    genreFilter()
  })
}