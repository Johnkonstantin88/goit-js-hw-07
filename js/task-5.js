const setColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const background = document.body;

setColorBtn.addEventListener("click", onSetColor);

function onSetColor() {
  colorValue.textContent = background.style.backgroundColor =
    getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
