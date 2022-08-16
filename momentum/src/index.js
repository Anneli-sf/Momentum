import {
  showGreeting,
  getTimesOfDay,
  lang,
  setNameLocalStorage,
  getNameLocalStorage
} from "./js/greeting";
import { DATE, showDate } from "./js/date";
import { getRandomNum } from "./js/random-num";
import {
  CITY,
  getWeather,
  setCityLocalStorage,
  getCityLocalStorage,
} from "./js/weather";
import { getQuote } from "./js/quote";
import {
  BTN_PLAY,
  BTN_NEXT,
  BTN_PREV,
  AUDIO,
  playAudio,
  playNext,
  playPrev,
} from "./js/audio-player";
import { moveButtonTodo, moveButtonQuote } from "./js/move-button";
import {
  TIME,
  LANGUAGE_OPTION,
  BTN_SETTINGS,
  SETTINGS,
  PHOTO_SOURCE_OPTION,
  BG_THEME,
  bgThemeSetText,
  BG_THEME_ARTICLE,
  setSettings,
  createSettings,
  openSettings,
  // setSettingsLocalStorage,
  getSettingsLocalStorage,
  timeSet,
  audioSet,
  dataSet,
  quoteSet,
  todoSet,
  greetingSet,
  weatherSet,
  setSettingsLocalStorage,
} from "./js/settings";
import {
  theme,
  // getLinkUnsplash,
  getLinkFlickr,
} from "./js/upsplash-flick";
import { BTN_TODO, TODO_LIST, todoFunction, openToDo } from "./js/todo";

const BODY = document.querySelector("body");
const SLIDE_NEXT = document.querySelector(".slide-next");
const SLIDE_PREV = document.querySelector(".slide-prev");
const CHANGE_QUOTE = document.querySelector(".change-quote");

let randomNum = getRandomNum(1, 20); //type Number
let bgImageNum;

//----------------------------when the page load---------------

window.addEventListener("load", loadPage);

function loadPage() {
  if (localStorage.getItem("LANGUAGE_OPTION")) {
    LANGUAGE_OPTION.value = localStorage.getItem("LANGUAGE_OPTION");
    if (LANGUAGE_OPTION.value == "en") lang.value = "en";
    else lang.value = "ru";
  }

  showTime();
  setBgImage();
  getWeather(lang.value);
  getQuote(lang.value);
  // createSettings(lang);
  getNameLocalStorage();
  getCityLocalStorage();
  getSettingsLocalStorage();
  // getGreetinglStorage();
}

//-----------------------------WATCH------------------
function showTime() {
  const date = new Date();
  const options = { hour12: false };
  const currentTime = date.toLocaleTimeString("en-US", options);
  TIME.textContent = currentTime;
  showDate(lang.value);
  showGreeting(lang.value);
  setTimeout(showTime, 1000);
}

//----------------------------------------------------LOCAL STORAGE-----------------

window.addEventListener("beforeunload", () => {
  setNameLocalStorage();
  // setSettingsLocalStorage();
  // getSettingsLocalStorage();
});

//-------------------BG IMAGE-----------------

function getImageNumber() {
  if (randomNum < 10) bgImageNum = randomNum.toString().padStart(2, 0);
  else bgImageNum = randomNum.toString();

  return bgImageNum; //type String
}

PHOTO_SOURCE_OPTION.addEventListener("change", setBgImage); //change the source (GH or API)

BG_THEME.addEventListener("change", () => {
  //change img depending on the theme
  console.log("flickr bg theme in input", BG_THEME.value);
  setBgImage();
  setSettingsLocalStorage(); //remember the theme
});

//--------------main func of setting bg image
async function setBgImage() {
  const img = new Image();

  let lang = "en";
  let timesOfDay = getTimesOfDay(lang);
  // let linkUnsplash = await getLinkUnsplash(); //включить
  let linkFlickr = await getLinkFlickr();

  getImageNumber();

  switch (PHOTO_SOURCE_OPTION.value) {
    case "github":
      {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${bgImageNum}.jpg`;
        BG_THEME_ARTICLE.classList.remove("visible");
        BG_THEME.value = "";
      }
      break;
    case "unsplash":
      {
        // img.src = `${linkUnsplash}`;  //включить
        BG_THEME_ARTICLE.classList.remove("visible");
        // BG_THEME.value = "";
      }
      break;
    default: {
      img.src = `${linkFlickr}`;
      BG_THEME_ARTICLE.classList.add("visible");
    }
  }

  img.onload = () => {
    BODY.style.backgroundImage = `url(${img.src})`;
  };
}

//-------------------SLIDER-----------------
SLIDE_NEXT.addEventListener("click", slideNextImg);
SLIDE_PREV.addEventListener("click", slidePrevImg);

function slideNextImg() {
  randomNum = randomNum + 1; //type Number
  if (randomNum == 21) randomNum = 1;

  setBgImage();
  console.log("number of slide is", randomNum);
}

function slidePrevImg() {
  randomNum = randomNum - 1; //type Number
  if (randomNum == 0) randomNum = 20;

  setBgImage();
  console.log("number of slide is", randomNum);
}

//--------------------WEATHER-------------

CITY.addEventListener("change", changeCity);

function changeCity(e) {
  CITY.value = e.target.value;
  console.log("change city", CITY.value);
  setCityLocalStorage();
  getWeather(lang.value);
}

//--------------------QUOTES-------------

CHANGE_QUOTE.addEventListener("click", changeQuote);

function changeQuote() {
  moveButtonQuote(CHANGE_QUOTE);
  getQuote(lang.value);
}

//--------------------AUDIO PLAYER-------------

BTN_PLAY.addEventListener("click", playAudio);
BTN_NEXT.addEventListener("click", playNext);
BTN_PREV.addEventListener("click", playPrev);
AUDIO.addEventListener("ended", playNext);

//-------------------------------------------SETTINGS-------------

BTN_SETTINGS.addEventListener("click", () => {
  openSettings(lang.value);
  // getSettingsLocalStorage();
});
SETTINGS.addEventListener("click", () => {
  setSettings();
  // getSettingsLocalStorage();
});

BODY.addEventListener("click", (el) => {
  if (!el.target.closest(".settings") && !el.target.closest(".settings-button"))
    SETTINGS.classList.remove("open");

  if (!el.target.closest(".todo") && !el.target.closest(".todo-button"))
    TODO_LIST.classList.remove("open");
});

//--------------------TO DO-------------

BTN_TODO.addEventListener("click", () => {
  openToDo(lang.value);
});
todoFunction.init();

//--------------------TRANSLATION------------

LANGUAGE_OPTION.addEventListener("change", translate);

function translate(e) {
  lang.value = e.currentTarget.value;
  console.log("current language -", lang.value);
  getWeather(lang.value);
  // changeCity(lang.value);
  console.log("current city.value -", CITY.value);
  getQuote(lang.value);
  showDate(lang.value);
  showGreeting(lang.value);
  createSettings(lang.value);
  // setSettingsLocalStorage(lang.value);
  // setGreetingLocalStorage(lang.value);
}

//--------------------API------------
