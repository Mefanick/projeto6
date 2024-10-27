export { modeSwitch }

function modeSwitch() {
  const html = document.documentElement;
  const img = document.querySelector(".button__image");
  if (html.classList.contains("light")) {
    html.classList.toggle("light");
    html.classList.toggle("dark");
    img.setAttribute("src", "./src/assets/icons/sun-icon.svg");
  } else {
    html.classList.toggle("dark");
    html.classList.toggle("light");
    img.setAttribute("src", "./src/assets/icons/moon-icon.svg");
  }
}
