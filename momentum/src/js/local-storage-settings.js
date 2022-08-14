//----------------- LOCAL STORAGE SETTINGS-------------------
import {
  createSettings,
  setSettings,
  langSetText,
  timeSet,
  audioSet,
  dataSet,
  quoteSet,
  todoSet,
  greetingSet,
  weatherSet,
  PHOTO_SOURCE_OPTION,
  LANGUAGE_OPTION,
} from "./settings";
import { lang } from "./greeting";

function setSettingsLocalStorage() {
  // localStorage.setItem("langSetText", langSetText.textContent);

  localStorage.setItem("LANGUAGE_OPTION", LANGUAGE_OPTION.value);
  localStorage.setItem("PHOTO_SOURCE_OPTION", PHOTO_SOURCE_OPTION.value);
  localStorage.setItem("BG_THEME", BG_THEME.value);
  localStorage.setItem("timeSet", timeSet.checked);
  localStorage.setItem("dataSet", dataSet.checked);
  localStorage.setItem("greetingSet", greetingSet.checked);
  localStorage.setItem("weatherSet", weatherSet.checked);
  localStorage.setItem("quoteSet", quoteSet.checked);
  localStorage.setItem("audioSet", audioSet.checked);
  localStorage.setItem("todoSet",  todoSet.checked);
  localStorage.setItem("lang", lang.value);

//   setSettings();
}

function getSettingsLocalStorage(lang) {
//   if (localStorage.getItem("langSetText"))
//     langSetText.textContent = localStorage.getItem("langSetText");

  if (localStorage.getItem("LANGUAGE_OPTION"))
    LANGUAGE_OPTION.value = localStorage.getItem("LANGUAGE_OPTION");//язык сохраняется, но не переводится приложение


    if (localStorage.getItem("PHOTO_SOURCE_OPTION")) //словить текущее
    PHOTO_SOURCE_OPTION.value = localStorage.getItem("PHOTO_SOURCE_OPTION");

    if (localStorage.getItem("BG_THEME"))
    BG_THEME.value = localStorage.getItem("BG_THEME"); //нужен else, если тема не записана? 


    // if (JSON.parse(localStorage.getItem("timeSet"))) timeSet.checked = true; else timeSet.checked = false;
    // if (JSON.parse(localStorage.getItem("dataSet))) dataSet.checked = true; else dataSet.checked = false;
    // if (JSON.parse(localStorage.getItem("greetingSet))) greetingSet.checked = true; else greetingSet.checked = false;
    // if (JSON.parse(localStorage.getItem("weatherSet))) weatherSet.checked = true; else weatherSet.checked = false;
    // if (JSON.parse(localStorage.getItem("quoteSet))) quoteSet.checked = true; else quoteSet.checked = false;
    // if (JSON.parse(localStorage.getItem("audioSet))) audioSet.checked = true; else audioSet.checked = false;
    // if (JSON.parse(localStorage.getItem("todoSet))) todoSet.checked = true; else todoSet.checked = false;
}

export { setSettingsLocalStorage, getSettingsLocalStorage };
