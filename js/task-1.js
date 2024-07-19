const mainList = document.querySelector("#categories");

console.log(`Number of categories: ${[...mainList.children].length}`);

const getResult = [...mainList.children].forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${[...el.lastElementChild.children].length}`);
});
