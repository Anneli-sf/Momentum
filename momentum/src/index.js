import { showGreeting, getTimesOfDay, lang, GREETING } from "./js/greeting";
import { DATE, showDate } from "./js/date";
import { setLocalStorage, getLocalStorage } from "./js/local-storage";
import { getRandomNum } from "./js/random-num";
import { CITY, getWeather } from "./js/weather";
import { getQuote } from "./js/quote";
// import { translation } from "./js/translation";
import {
  BTN_PLAY,
  BTN_NEXT,
  BTN_PREV,
  AUDIO,
  playAudio,
  playNext,
  playPrev,
} from "./js/audio-player";
import {
  moveButtonTodo,
  moveButtonQuote,
  moveButtonSettings,
} from "./js/move-button";
import { TIME, BTN_TODO, setSettings } from "./js/settings";
import { LANGUAGE_OPTION, language, changeLanguage } from "./js/translate";


const BODY = document.querySelector("body");
const SLIDE_NEXT = document.querySelector(".slide-next");
const SLIDE_PREV = document.querySelector(".slide-prev");
const CHANGE_QUOTE = document.querySelector(".change-quote");

let randomNum = getRandomNum(1, 20); //type Number
let bgImageNum;


//----------------------------when the page load---------------
window.addEventListener("load", loadPage);

function loadPage() {
  showTime();
  setBgImage();
  getLocalStorage();
  getWeather(lang);
  getQuote(lang);
}

//-----------------------------WATCH------------------
function showTime() {
  const date = new Date();
  const options = { hour12: false };
  const currentTime = date.toLocaleTimeString("en-US", options);
  TIME.textContent = currentTime;
  showDate(lang);
  showGreeting(lang);
  setTimeout(showTime, 1000);
}

//-------------------LOCAL STORAGE-----------------

window.addEventListener("beforeunload", setLocalStorage);


//-------------------BG IMAGE-----------------

function getImageNumber() {
  if (randomNum < 10) bgImageNum = randomNum.toString().padStart(2, 0);
  else bgImageNum = randomNum.toString();

  return bgImageNum; //type String
}

function setBgImage() {
  //   const img = new Image(); //если так, то подвисает загрузка
  //   img.src = "images/img/bg.jpg";
  let lang = "en";
  let timesOfDay = getTimesOfDay(lang);
  getImageNumber();

  BODY.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${bgImageNum}.jpg')`;
  //   img.onload = () => {
  //     BODY.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${bgImageNum}.jpg')`;
  //   };
}

//-------------------SLIDER-----------------
SLIDE_NEXT.addEventListener("click", slideNextImg);
SLIDE_PREV.addEventListener("click", slidePrevImg);

function slideNextImg() {
  randomNum = randomNum + 1; //type Number
  if (randomNum == 21) randomNum = 1;

  setBgImage();
}

function slidePrevImg() {
  randomNum = randomNum - 1; //type Number
  if (randomNum == 0) randomNum = 20;

  setBgImage();
}

//--------------------WEATHER-------------

CITY.addEventListener("change", changeCity);

function changeCity(e) {
  CITY.value = e.target.value;
  getWeather(lang);
}

//--------------------QUOTES-------------

CHANGE_QUOTE.addEventListener("click", changeQuote);

function changeQuote() {
  moveButtonQuote(CHANGE_QUOTE);
  getQuote(lang);
}

//--------------------AUDIO PLAYER-------------

BTN_PLAY.addEventListener("click", playAudio);
BTN_NEXT.addEventListener("click", playNext);
BTN_PREV.addEventListener("click", playPrev);
AUDIO.addEventListener("ended", playNext);

//--------------------SHOW SETTINGS-------------

const BTN_SETTINGS = document.querySelector(".settings-button");
const SETTINGS = document.querySelector(".settings");

BODY.addEventListener("click", (el) => {
  if (!el.target.closest(".settings") && !el.target.closest(".settings-button"))
    SETTINGS.classList.remove("open");
});

BTN_SETTINGS.addEventListener("click", () => {
  SETTINGS.classList.toggle("open");
  moveButtonSettings(BTN_SETTINGS);
});

//----------------- SET SETTINGS-------------------

SETTINGS.addEventListener("click", setSettings);

//--------------------TO DO-------------

BTN_TODO.addEventListener("click", () => {
  moveButtonTodo(BTN_TODO);
});

//--------------------TRANSLATION------------

// LANGUAGE_OPTION.addEventListener('change', (currLang) => {
//   currLang = LANGUAGE_OPTION.value;
//   console.log('option', currLang)
//   getWeather(currLang);
//   getQuote(currLang);
//   showDate(currLang);
//   showGreeting(currLang);
// });




