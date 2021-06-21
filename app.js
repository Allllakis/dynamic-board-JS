const board = document.querySelector("#board");
const colors = [
  "rgb(211, 47, 184)",
  "rgb(211, 47, 61)",
  "rgb(211, 47, 110)",
  "rgb(47, 85, 211)",
  "rgb(47, 118, 211)",
  "rgb(211, 159, 47)",
  "rgb(211, 121, 47)",
  "rgb(211, 72, 47)",
  "rgb(47, 173, 211)",
  "rgb(47, 211, 184)",
  "rgb(47, 211, 115)",
  "rgb(93, 211, 47)",
  "rgb(175, 211, 47)",
];
const SQARES_NUMBER = 500;

for (let i = 0; i < SQARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#190331";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
