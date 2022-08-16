//--------------------API------------
import { getTimesOfDay } from "./greeting";
import { getRandomNum } from "./random-num";
import { BG_THEME } from "./settings";
import {lang} from "./greeting";

// async function getLinkUnsplash() {
//   let lang = "en";
//   let timesOfDay = getTimesOfDay(lang);

//   let urlApi = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timesOfDay}&client_id=z65655qez_mGW1VKX4DsJGoNlkQEoNHBn37NhzPwyE0`;
//   const resApi = await fetch(urlApi);
//   const dataApi = await resApi.json();

//   return dataApi.urls.regular;
// }


let theme;
async function getLinkFlickr() {
  let lang = "en";
  let timesOfDay = getTimesOfDay(lang);
  let photoNum = getRandomNum(1, 50);
  
  if (BG_THEME.value) theme = BG_THEME.value;
  else theme = timesOfDay;
  
  console.log('flickr bg theme start', theme);

  let urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=99db50653f5b2b2c4dfe4766555f1d09&tags=${theme}&extras=url_l&format=json&nojsoncallback=1`;
  const resFlickr = await fetch(urlFlickr);
  const dataFlickr = await resFlickr.json();

  // if (?????? == undefined) {
  //   urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=99db50653f5b2b2c4dfe4766555f1d09&tags=blacksquare&extras=url_l&format=json&nojsoncallback=1`;
  // }

  return dataFlickr.photos.photo[photoNum].url_l;
}

export { theme,
  // getLinkUnsplash, 
  getLinkFlickr };
