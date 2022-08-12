//----------------- SET SETTINGS-------------------
import { DATE } from "./date";


const audioSet = document.querySelector("#audio");
const dataSet = document.querySelector("#date");
const timeSet = document.querySelector("#time");
const quoteSet = document.querySelector("#quote");
const todoSet = document.querySelector("#todo");
const greetingSet = document.querySelector("#greeting");
const weatherSet = document.querySelector("#weather");

const PLAYER = document.querySelector(".player");
const GREETING_ARTICLE = document.querySelector(".greeting-container");
const QUOTE_ARTICLE = document.querySelector(".footer-quotes");
const WEATHER = document.querySelector(".weather");
const BTN_TODO = document.querySelector(".todo-button");
const TIME = document.querySelector(".time");

let settingsData = [
  weatherSet,
  audioSet,
  dataSet,
  timeSet,
  quoteSet,
  todoSet,
  greetingSet,
];

let activities = [
  WEATHER,
  PLAYER,
  DATE,
  TIME,
  QUOTE_ARTICLE,
  BTN_TODO,
  GREETING_ARTICLE,
];

function setSettings() {
  settingsData.forEach((item, index) =>
    item.addEventListener("change", () => {
      if (item.checked == false) activities[index].classList.add("hidden");
      else activities[index].classList.remove("hidden");
    })
  );
}

export { TIME, BTN_TODO, setSettings };
