//---------------------CHANGE BUTTON DEGREE------------------
let changeDegTodo = 0;
let changeDegQuote = 0;
let changeDegSettings = 0;

function moveButtonTodo(el) {
  changeDegTodo = changeDegTodo + 180;
  el.style.transform = `rotateY(${changeDegTodo}deg)`;
  el.style.transition = "0.6s";
}

function moveButtonQuote(el) {
  changeDegQuote = changeDegQuote + 180;
  el.style.transform = `rotate(${changeDegQuote}deg)`;
  el.style.transition = "0.6s";
}

function moveButtonSettings(el) {
  changeDegSettings = changeDegSettings + 180;
  el.style.transform = `rotate(${changeDegSettings}deg)`;
  el.style.transition = "0.6s";
}

export { moveButtonTodo, moveButtonQuote, moveButtonSettings };
