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
  moveButtonQuote
} from "./js/move-button";
import { TIME, BTN_SETTINGS, SETTINGS, PHOTO_SOURCE_OPTION, BG_THEME, bgThemeSetText, setSettings, createSettings, openSettings } from "./js/settings";
import { LANGUAGE_OPTION } from "./js/translate";
import { getLinkUnsplash, getLinkFlickr } from "./js/upsplash-flick";
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
  showTime();
  setBgImage();
  getLocalStorage();
  getWeather(lang.value);
  getQuote(lang.value);
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

//-------------------LOCAL STORAGE-----------------

window.addEventListener("beforeunload", setLocalStorage);


//-------------------BG IMAGE-----------------



function getImageNumber() {
  if (randomNum < 10) bgImageNum = randomNum.toString().padStart(2, 0);
  else bgImageNum = randomNum.toString();

  return bgImageNum; //type String
}

PHOTO_SOURCE_OPTION.addEventListener('change', () => {
  setBgImage();
  if (PHOTO_SOURCE_OPTION.value == 'flickr') {
    bgThemeSetText.classList.remove("hidden");
    BG_THEME.classList.remove("hidden");
  }
});

async function setBgImage() {
  //   const img = new Image(); //если так, то подвисает загрузка
  //   img.src = "images/img/bg.jpg";
  let lang = "en";
  let timesOfDay = getTimesOfDay(lang);
  let linkUnsplash = await getLinkUnsplash();
  let linkFlickr = await getLinkFlickr();

  getImageNumber();

  if (PHOTO_SOURCE_OPTION.value == 'flickr') {
    bgThemeSetText.classList.remove("hidden");
    BG_THEME.classList.remove("hidden");
  }

  switch(PHOTO_SOURCE_OPTION.value) {
    case 'github': return BODY.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${bgImageNum}.jpg')`;
    case 'unsplash': return BODY.style.backgroundImage = `url(${linkUnsplash})`;
    default: return BODY.style.backgroundImage = `url(${linkFlickr})`;
  }

  

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

//--------------------SETTINGS-------------

BTN_SETTINGS.addEventListener("click", () => openSettings(lang.value));
SETTINGS.addEventListener("click", setSettings);

BODY.addEventListener("click", (el) => {
  if (!el.target.closest(".settings") && !el.target.closest(".settings-button"))
    SETTINGS.classList.remove("open");

  if (!el.target.closest(".todo") && !el.target.closest(".todo-button"))
    TODO_LIST.classList.remove("open");
});



//--------------------TO DO-------------

BTN_TODO.addEventListener("click", openToDo);
todoFunction.init();

//--------------------TRANSLATION------------

LANGUAGE_OPTION.addEventListener('change', (e) => {
  lang.value = e.currentTarget.value;
  console.log('сейчас', lang.value)
  getWeather(lang.value);
  getQuote(lang.value);
  showDate(lang.value);
  showGreeting(lang.value);
  createSettings(lang.value);
});

//--------------------API------------


