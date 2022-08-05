import { showGreeting, getTimesOfDay} from "./js/greeting";
import { showDate } from "./js/date";
import { setLocalStorage, getLocalStorage } from "./js/local-storage";
import { getRandomNum } from "./js/get-random-num";

const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");
const BODY = document.querySelector('body');


//----------------------------when the page load---------------
window.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  showTime();
}

//-----------------------------WATCH------------------
function showTime() {
  const date = new Date();
  const options = { hour12: false };
  const currentTime = date.toLocaleTimeString('en-US', options);
  TIME.textContent = currentTime;
  showDate(DATE);
  showGreeting(GREETING);
  setTimeout(showTime, 1000);
}


//-------------------LOCAL STORAGE-----------------

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);

//-------------------BG IMAGE-----------------


function setBgImage(item) {
    
    let timesOfDay = getTimesOfDay();
    console.log(timesOfDay);
    let bgImageNum = getRandomNum(1, 20).toString();
    if (bgImageNum < 10) bgImageNum = bgImageNum.toString().padStart(2, 0);
    console.log(bgImageNum);
    item.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${bgImageNum}.jpg')`;
}

setBgImage(BODY);