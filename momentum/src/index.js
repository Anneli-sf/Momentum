import { showGreeting, getTimesOfDay } from "./js/greeting";
import { showDate } from "./js/date";
import { setLocalStorage, getLocalStorage, CITY } from "./js/local-storage";
import { getRandomNum } from "./js/random-num";
import { getWeather } from "./js/weather";
import { getQuote } from "./js/quote";
import { playList } from "./js/playList";

const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");
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
  getWeather();
  getQuote();
}

//-----------------------------WATCH------------------
function showTime() {
  const date = new Date();
  const options = { hour12: false };
  const currentTime = date.toLocaleTimeString("en-US", options);
  TIME.textContent = currentTime;
  showDate(DATE);
  showGreeting(GREETING);
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

  let timesOfDay = getTimesOfDay();
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
  getWeather();
}

//--------------------QUOTES-------------

CHANGE_QUOTE.addEventListener("click", getQuote);

//--------------------AUDIO PLAYER-------------
const BTN_PLAY = document.querySelector(".play");
const BTN_NEXT = document.querySelector(".play-next");
const BTN_PREV = document.querySelector(".play-prev");
const PLAY_LIST = document.querySelector(".play-list");

const AUDIO = new Audio();
let isPlay = false;
let trackNum = 0;

BTN_PLAY.addEventListener("click", playAudio);
BTN_NEXT.addEventListener("click", playNext);
BTN_PREV.addEventListener("click", playPrev);
AUDIO.addEventListener('ended', playNext);

function startAudio() {
  AUDIO.currentTime = 0;
  AUDIO.play();
  // AUDIO.autoplay = true;
  isPlay = true;
}

function playAudio() {
  // audio.src = `images/sounds/River Flows In You.mp3`;
  AUDIO.src = playList[trackNum].src;
  const trackName = document.querySelectorAll(".play-item");

  if (!isPlay) {
    startAudio();
    BTN_PLAY.classList.toggle("pause");
    trackName[trackNum].classList.add("active");
  } else {
    AUDIO.pause();
    isPlay = false;
    BTN_PLAY.classList.toggle("pause");
    trackName[trackNum].classList.remove("active");
  }  
}

function playNext() {
  const trackName = document.querySelectorAll(".play-item");
  trackName.forEach(el => el.classList.remove('active'));

  if (trackNum == playList.length - 1) trackNum = 0;
  else trackNum = trackNum + 1;

  AUDIO.src = playList[trackNum].src;
  trackName[trackNum].classList.add("active");
  startAudio();

  if (BTN_PLAY.classList.contains("play")) {
    BTN_PLAY.classList.add("pause");
  }

  // AUDIO.addEventListener('ended', playNext);
}

function playPrev() {
  const trackName = document.querySelectorAll(".play-item");
  trackName.forEach(el => el.classList.remove('active'));

  if (trackNum == 0) trackNum = playList.length - 1;
  else trackNum = trackNum - 1;

  AUDIO.src = playList[trackNum].src;
  trackName[trackNum].classList.add("active");
  startAudio();

  if (BTN_PLAY.classList.contains("play")) {
    BTN_PLAY.classList.add("pause");
  }
}

playList.forEach((track, index) => {
  track = document.createElement("li");
  track.classList.add("play-item");
  track.textContent = `${playList[index].title}`;

  PLAY_LIST.appendChild(track);
});
