import { translation } from "./translation";
import { lang } from "./greeting";

//--------------------WEATHER-------------
const WEATHER_ICON = document.querySelector(".weather-icon");
const TEMPERATURE = document.querySelector(".temperature");
const WEATHER_DISCR = document.querySelector(".weather-description");
const WIND = document.querySelector(".wind");
const HUMIDITY = document.querySelector(".humidity");
const CITY = document.querySelector(".city");
const ERROR_TEXT = document.querySelector(".weather-error");

// CITY.value = `${translation[lang.value].cityTr}`;

async function getWeather(lang) {
  // CITY.value = `${translation[lang].cityTr}`; // переводит, но не сохраняет значение после смены города.
  //нужно как-то связать с changeCity() или изначально устанавливать:
  // - если в локалсторидж ничего нет и ничего не меняли, то CITY.value = `${translation[lang].cityTr}`;
  // - если в локсторидж есть, то оттуда
  // - если меняли, то оттуда

  if (localStorage.getItem("city")) CITY.value = localStorage.getItem("city");
  else CITY.value = `${translation[lang].cityTr}`;
  console.log('weather city', CITY.value)

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&lang=${lang}&appid=3d3089a958d144a6b08451c705f4ef59&units=metric`;
  const weatherRes = await fetch(weatherUrl);
  const weatherData = await weatherRes.json();

  //--------------------error message-------------
  if (weatherRes.status == 404) {
    ERROR_TEXT.textContent = `Error: city isn't found`;
    TEMPERATURE.textContent = "";
    WIND.textContent = "";
    HUMIDITY.textContent = "";
  } else if (weatherRes.status == 400) {
    ERROR_TEXT.textContent = `Error: enter the city`;
    TEMPERATURE.textContent = "";
    WIND.textContent = "";
    HUMIDITY.textContent = "";
  } else {
    ERROR_TEXT.textContent = "";
  }

  CITY.placeholder = `${translation[lang].cityPlaceHolderTr}`;
  WEATHER_ICON.className = "weather-icon owf";
  WEATHER_ICON.classList.add(`owf-${weatherData.weather[0].id}`);
  TEMPERATURE.textContent = `${Math.floor(weatherData.main.temp)} °C`;
  WEATHER_DISCR.textContent = weatherData.weather[0].description;
  WIND.textContent = `${translation[lang].windTr}: ${Math.floor(
    weatherData.wind.speed
  )} m/s`;
  HUMIDITY.textContent = `${translation[lang].humidityTr}: ${Math.floor(
    weatherData.main.humidity
  )} %`;
}

function setCityLocalStorage() {
  localStorage.setItem("city", CITY.value);
}

function getCityLocalStorage() {
  if (localStorage.getItem("city")) CITY.value = localStorage.getItem("city");
}

export { CITY, getWeather, setCityLocalStorage, getCityLocalStorage };
