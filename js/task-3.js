const textInput = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

textInput.addEventListener("input", onInput);

function onInput() {
  if (textInput.value.trim() === "") {
    spanName.textContent = "Anonymous";
  } else {
    spanName.textContent = textInput.value.trim();
  }
}
