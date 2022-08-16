import { translation } from "./translation";

//-----------------------------DATE------------------
const DATE = document.querySelector(".date");

function showDate(lang) {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = date.toLocaleDateString(
    `${translation[lang].langTr}`,
    options
  );
  DATE.textContent = currentDate;
}

export { DATE, showDate };
