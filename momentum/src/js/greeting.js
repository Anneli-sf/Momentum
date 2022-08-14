import { translation } from "./translation";

//-----------------------------GREETING------------------
const NAME = document.querySelector(".name");
const GREETING = document.querySelector(".greeting");

const lang = {
  value: 'en',
}

//------get greeting
function showGreeting(lang) {
  const timeOfDay = getTimesOfDay(lang);
  const greetingText = `${translation[lang].greetTr}${timeOfDay}, `;
  NAME.placeholder = `${translation[lang].plHolderTr}`;

  return (GREETING.textContent = greetingText);
}

//------get the current Times of Day
function getTimesOfDay(lang) {
  const date = new Date();
  const hours = date.getHours();
  const currOur = Math.floor(hours / 6);

  let timesOfDay = translation[lang].timesOfDayTr;

  let currTimesOfDay = timesOfDay.reduce((total, el, index) => {
    if (index == currOur) total = el;
    return total;
  });

  return currTimesOfDay;
}

export { NAME, GREETING, lang, showGreeting, getTimesOfDay };
