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

//----------------------------when the page load---------------
window.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  showTime();
  setBgImage();
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

window.addEventListener("load", getLocalStorage);

//-------------------BG IMAGE-----------------
let randomNum = getRandomNum(1, 20); //type Number
let bgImageNum;
function getImageNumber() {

    if (randomNum < 10) bgImageNum = randomNum.toString().padStart(2, 0);
    else bgImageNum = randomNum.toString();
    console.log(bgImageNum);
    return bgImageNum; //type String
}


function setBgImage() {
  let timesOfDay = getTimesOfDay();
  getImageNumber();
  BODY.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${bgImageNum}.jpg')`;
}


//-------------------SLIDER-----------------
SLIDE_NEXT.addEventListener("click", slideNextImg);
SLIDE_PREV.addEventListener("click", slidePrevImg);

function slideNextImg() {
    randomNum = randomNum + 1; //type Number
    if (randomNum == 21) randomNum = 1;
    console.log(randomNum);
    setBgImage();
}

function slidePrevImg() {
    randomNum = randomNum - 1; //type Number
    if (randomNum == 0) randomNum = 20;
    console.log(randomNum);
    setBgImage();
}
