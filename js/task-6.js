const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const controlsBar = document.querySelector("#controls");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  amount = Number(controlsBar.firstElementChild.value);

  const arr = [];

  let width = 30;
  let height = 30;

  if (amount < 1 || amount > 100) {
    return;
  }

  for (let index = 0; index < amount; index += 1) {
    if (arr.length > 0) {
      width += 10;
      height += 10;
    }

    const box = `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`;

    arr.push(box);
  }

  boxesContainer.insertAdjacentHTML(
    "beforeend",
    arr.toString().replaceAll(",", "")
  );

  controlsBar.firstElementChild.value = null;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
