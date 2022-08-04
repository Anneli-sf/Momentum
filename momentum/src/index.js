const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");

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
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}

//-----------------------------DATE------------------
function showDate() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", options);
  DATE.textContent = currentDate;
}

//-----------------------------GREETING------------------
const GREETING = document.querySelector(".greeting");

//------get greeting
function showGreeting() {
  const timeOfDay = getTimesOfDay();
  const greetingText = `Good ${timeOfDay}, `;

  return (GREETING.textContent = greetingText);
}

//------get the current Times of Day
function getTimesOfDay() {
  const date = new Date();
  const hours = date.getHours();
  const currOur = Math.floor(hours / 6);

  let timesOfDay = ["night", "morning", "afternoon", "evening"];

  let currTimesOfDay = timesOfDay.reduce((total, el, index) => {
    if (index == currOur) total = el;
    return total;
  });

  return currTimesOfDay;
}


