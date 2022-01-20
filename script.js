let order = [];
let clickedOrder = [];
let score = 0;
let elementColor;
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const start = document.querySelector(".start");
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);

  order[order.length] = colorOrder;
  clickedOrder = [];
  for (let i in order) {
    elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
      element.classList.remove("selected");
  }, number);
};
let checkOrder = () => {
    
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    setTimeout(() => {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    });
    
  }
};
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    checkOrder();
};
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
    default:
      break;
  }
};
let nextLevel = () => {
  score++;
  shuffleOrder();
};
let lose = () => {
  alert(`Pontuação: ${score}!\n Você perdeu o jogo!\n Clique para reinicar!`);
  order = [];
  clickedOrder = [];
  playGame();
};
function playGame() {
  alert("Bem vindo ao Color Memory! Iniciando novo jogo!");
  score = 0;
  nextLevel();
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
start.onclick = () => playGame();
