import { translation } from "./translation";
import { lang } from "./translate";

//--------------------WEATHER-------------
const WEATHER_ICON = document.querySelector(".weather-icon");
const TEMPERATURE = document.querySelector(".temperature");
const WEATHER_DISCR = document.querySelector(".weather-description");
const WIND = document.querySelector(".wind");
const HUMIDITY = document.querySelector(".humidity");
const CITY = document.querySelector(".city");
const ERROR_TEXT = document.querySelector(".weather-error");

async function getWeather(lang) {
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

export { CITY, getWeather };
