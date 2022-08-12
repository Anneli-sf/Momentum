//--------------------API------------
import {getTimesOfDay} from "./greeting";
import {getRandomNum} from "./random-num";

async function getLinkUnsplash() {
  let lang = "en";
  let timesOfDay = getTimesOfDay(lang);

  let urlApi = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timesOfDay}&client_id=83edTzadSNG1MdwI8nd8CP-UpYibtaLhSSqKAE_hcOU`;
  const resApi = await fetch(urlApi);
  const dataApi = await resApi.json();

  return dataApi.urls.regular;
};

async function getLinkFlickr() {

  let lang = "en";
  let timesOfDay = getTimesOfDay(lang);
  let photoNum = getRandomNum(1, 50);

  // let urlApi = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timesOfDay}&client_id=83edTzadSNG1MdwI8nd8CP-UpYibtaLhSSqKAE_hcOU`;
  let urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=99db50653f5b2b2c4dfe4766555f1d09&tags=${timesOfDay}&extras=url_l&format=json&nojsoncallback=1`;
  const resFlickr = await fetch(urlFlickr);
  const dataFlickr = await resFlickr.json();
// console.log('dataFlickr', dataFlickr.photos.photo[photoNum].url_l)
  return dataFlickr.photos.photo[photoNum].url_l;
}

export { getLinkUnsplash, getLinkFlickr };
