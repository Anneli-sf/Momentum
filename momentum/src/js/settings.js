//----------------- SET SETTINGS-------------------
import { DATE } from "./date";
import { translation } from "./translation";
import { lang } from "./greeting";


const audioSet = document.querySelector("#audio");
const dataSet = document.querySelector("#date");
const timeSet = document.querySelector("#time");
const quoteSet = document.querySelector("#quote");
const todoSet = document.querySelector("#todo");
const greetingSet = document.querySelector("#greeting");
const weatherSet = document.querySelector("#weather");

const langSetText = document.querySelector('.text-choose-language');
const photoSourseSetText = document.querySelector('.text-choose-photosource');
const bgThemeSetText = document.querySelector('.text-choose-background');
const dateSetText = document.querySelector('.text-date');
const timeSetText = document.querySelector('.text-time');
const greetSetText = document.querySelector('.text-greeting');
const quoteSetText = document.querySelector('.text-quotes');
const weatherSetText = document.querySelector('.text-weather');
const audioSetText = document.querySelector('.text-audioplayer');
const todoSetText = document.querySelector('.text-todo');


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

function createSettings(lang) {
    
  langSetText.textContent = `${translation[lang].chooseLangTr}`;
  photoSourseSetText.textContent = `${translation[lang].chooseSourceTr}`;
  bgThemeSetText.textContent = `${translation[lang].enterBgTemeTr}`;
  dateSetText.textContent = `${translation[lang].dateTr}`;
  timeSetText.textContent = `${translation[lang].timeTr}`;
  greetSetText.textContent = `${translation[lang].greetingTr}`;
  quoteSetText.textContent = `${translation[lang].quoteTr}`;
  weatherSetText.textContent = `${translation[lang].weatherTr}`;
  audioSetText.textContent = `${translation[lang].audioTr}`;
  todoSetText.textContent = `${translation[lang].todoTr}`;
}

export { TIME, BTN_TODO, setSettings, createSettings };
