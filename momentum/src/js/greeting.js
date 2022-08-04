//-----------------------------GREETING------------------
// const GREETING = document.querySelector(".greeting");

//------get greeting
function showGreeting(el) {
  const timeOfDay = getTimesOfDay();
  const greetingText = `Good ${timeOfDay}, `;

  return (el.textContent = greetingText);
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

export {showGreeting, getTimesOfDay};