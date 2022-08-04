//-----------------------------DATE------------------
function showDate(el) {
    const date = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    const currentDate = date.toLocaleDateString("en-US", options);
    el.textContent = currentDate;
  }

  export {showDate};