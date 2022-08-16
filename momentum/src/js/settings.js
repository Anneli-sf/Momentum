//----------------- SET SETTINGS-------------------
import { DATE } from "./date";
import { translation } from "./translation";
import { moveButtonSettings } from "./move-button";
import { BTN_TODO } from "./todo";
import { lang } from "./greeting";

const SETTINGS = document.querySelector(".settings");
const BTN_SETTINGS = document.querySelector(".settings-button");

const LANGUAGE_OPTION = document.querySelector(".change-language");
const PHOTO_SOURCE_OPTION = document.querySelector(".change-photosource");
const BG_THEME = document.querySelector(".choose-background");

const audioSet = document.querySelector("#audio");
const dataSet = document.querySelector("#date");
const timeSet = document.querySelector("#time");
const quoteSet = document.querySelector("#quote");
const todoSet = document.querySelector("#todo");
const greetingSet = document.querySelector("#greeting");
const weatherSet = document.querySelector("#weather");

const langSetText = document.querySelector(".text-choose-language");
const photoSourseSetText = document.querySelector(".text-choose-photosource");
const bgThemeSetText = document.querySelector(".text-choose-background");
const dateSetText = document.querySelector(".text-date");
const timeSetText = document.querySelector(".text-time");
const greetSetText = document.querySelector(".text-greeting");
const quoteSetText = document.querySelector(".text-quotes");
const weatherSetText = document.querySelector(".text-weather");
const audioSetText = document.querySelector(".text-audioplayer");
const todoSetText = document.querySelector(".text-todo");

const PLAYER = document.querySelector(".player");
const GREETING_ARTICLE = document.querySelector(".greeting-container");
const QUOTE_ARTICLE = document.querySelector(".footer-quotes");
const BG_THEME_ARTICLE = document.querySelector(".choose-option-background");
const WEATHER = document.querySelector(".weather");

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

function setSettings() { //hidden blockes if checkbox = false
  settingsData.forEach((item, index) => {

    item.addEventListener("change", () => {
      if (item.checked == false) activities[index].classList.add("hidden");
      else activities[index].classList.remove("hidden");
    })
  }

  
  );
  // setSettingsLocalStorage();
  // getSettingsLocalStorage();
}

function createSettings(lang) {
  langSetText.textContent = `${translation[lang].chooseLangTr}`;
  photoSourseSetText.textContent = `${translation[lang].chooseSourceTr}`;
  bgThemeSetText.textContent = `${translation[lang].enterBgTemeTr}`;
  BG_THEME.placeholder = `${translation[lang].bgPlaceHolderTr}`;
  dateSetText.textContent = `${translation[lang].dateTr}`;
  timeSetText.textContent = `${translation[lang].timeTr}`;
  greetSetText.textContent = `${translation[lang].greetingTr}`;
  quoteSetText.textContent = `${translation[lang].quoteTr}`;
  weatherSetText.textContent = `${translation[lang].weatherTr}`;
  audioSetText.textContent = `${translation[lang].audioTr}`;
  todoSetText.textContent = `${translation[lang].todoTr}`;

  // getSettingsLocalStorage();
  // setSettings();
 
  // getSettingsLocalStorage();
}

function openSettings(lang) {
  SETTINGS.classList.toggle("open");
  moveButtonSettings(BTN_SETTINGS);
  getSettingsLocalStorage();

  settingsData.forEach((item) => {

    if (localStorage.get(`'${item}'`)) item.checked =  localStorage.get(`'${item}'`); else item.checked = true;

  });
  setSettings();
  createSettings(lang);
  
  // setSettingsLocalStorage();
  
}

function setSettingsLocalStorage() {

  localStorage.setItem("LANGUAGE_OPTION", LANGUAGE_OPTION.value);
  localStorage.setItem("PHOTO_SOURCE_OPTION", PHOTO_SOURCE_OPTION.value);
  localStorage.setItem("BG_THEME", BG_THEME.value);
  localStorage.setItem("timeSet", timeSet.checked);
  localStorage.setItem("dataSet", dataSet.checked);
  localStorage.setItem("greetingSet", greetingSet.checked);
  localStorage.setItem("weatherSet", weatherSet.checked);
  localStorage.setItem("quoteSet", quoteSet.checked);
  localStorage.setItem("audioSet", audioSet.checked);
  localStorage.setItem("todoSet", todoSet.checked);
  localStorage.setItem("lang", lang.value);

}

function getSettingsLocalStorage(lang) {
  
  let currTimeSet = JSON.parse(localStorage.getItem("timeSet"));
  let currDataSet = JSON.parse(localStorage.getItem("dataSet"));
  let currGreetingsSet = JSON.parse(localStorage.getItem("greetingSet"));
  let currWeatherSet = JSON.parse(localStorage.getItem("weatherSet"));
  let currQuoteSet = JSON.parse(localStorage.getItem("quoteSet"));
  let currAudioSet = JSON.parse(localStorage.getItem("audioSet"));
  let currTodoSet = JSON.parse(localStorage.getItem("todoSet"));

  if (localStorage.getItem("LANGUAGE_OPTION"))
    LANGUAGE_OPTION.value = localStorage.getItem("LANGUAGE_OPTION"); 

  if (localStorage.getItem("PHOTO_SOURCE_OPTION"))
    //словить текущее
    PHOTO_SOURCE_OPTION.value = localStorage.getItem("PHOTO_SOURCE_OPTION");

  if (localStorage.getItem("BG_THEME"))
    BG_THEME.value = localStorage.getItem("BG_THEME"); //нужен else, если тема не записана?

  if (currTimeSet == true) timeSet.checked = true; else timeSet.checked = false;
  if (currDataSet == true) dataSet.checked = true; else dataSet.checked = false;
  if (currGreetingsSet) greetingSet.checked = true; else greetingSet.checked = false;
  if (currWeatherSet) weatherSet.checked = true; else weatherSet.checked = false;
  if (currQuoteSet) quoteSet.checked = true; else quoteSet.checked = false;
  if (currAudioSet) audioSet.checked = true; else audioSet.checked = false;
  if (currTodoSet) todoSet.checked = true; else todoSet.checked = false;
}

export {
  LANGUAGE_OPTION,
  TIME,
  BTN_SETTINGS,
  SETTINGS,
  PHOTO_SOURCE_OPTION,
  BG_THEME,
  BG_THEME_ARTICLE,
  bgThemeSetText,
  setSettings,
  createSettings,
  openSettings,
  setSettingsLocalStorage,
  getSettingsLocalStorage,
  langSetText,
  timeSet,
  audioSet,
  dataSet,
  quoteSet,
  todoSet,
  greetingSet,
  weatherSet
};
