import { showGreeting} from "./js/greeting";
import { showDate } from "./js/date";
import { NAME, setLocalStorage, getLocalStorage } from "./js/local-storage";

const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");


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

// //-----------------------------DATE------------------
// function showDate(el) {
//   const date = new Date();
//   const options = { weekday: "long", month: "long", day: "numeric" };
//   const currentDate = date.toLocaleDateString("en-US", options);
//   el.textContent = currentDate;
// }

// -----------------------------GREETING------------------

// //------get greeting
// function showGreeting(el) {
//   const timeOfDay = getTimesOfDay();
//   const greetingText = `Good ${timeOfDay}, `;

//   return (el.textContent = greetingText);
// }

// //------get the current Times of Day
// function getTimesOfDay() {
//   const date = new Date();
//   const hours = date.getHours();
//   const currOur = Math.floor(hours / 6);

//   let timesOfDay = ["night", "morning", "afternoon", "evening"];

//   let currTimesOfDay = timesOfDay.reduce((total, el, index) => {
//     if (index == currOur) total = el;
//     return total;
//   });

//   return currTimesOfDay;
// }


//-------------------LOCAL STORAGE-----------------
// function setLocalStorage() {
//     localStorage.setItem('name', NAME.value);
// }

window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//     if(localStorage.getItem('name')) 
//         NAME.value = localStorage.getItem('name');
    
// }

window.addEventListener('load', getLocalStorage);


