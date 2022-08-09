import { showGreeting, getTimesOfDay } from "./js/greeting";
import { showDate } from "./js/date";
import { setLocalStorage, getLocalStorage } from "./js/local-storage";
import { getRandomNum } from "./js/random-num";

const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");
const BODY = document.querySelector("body");
const SLIDE_NEXT = document.querySelector(".slide-next");
const SLIDE_PREV = document.querySelector(".slide-prev");

let randomNum = getRandomNum(1, 20); //type Number
let bgImageNum;

//----------------------------when the page load---------------
window.addEventListener("load", loadPage);

function loadPage() {
  showTime();
  setBgImage();
  getLocalStorage();
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
const linkWeather = `url("https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=3d3089a958d144a6b08451c705f4ef59&units=metric")`
const WEATHER_ICON = document.querySelector('.weather-icon');
const TEMPERATURE = document.querySelector('.temperature');
const WEATHER_DISCR = document.querySelector('.weather-description');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=3d3089a958d144a6b08451c705f4ef59&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

    WEATHER_ICON.classList.add(`owf-804`);
    TEMPERATURE.textContent = `${Math.floor(data.main.temp)} °C`;
    WEATHER_DISCR.textContent = data.weather[0].description;
};

getWeather();