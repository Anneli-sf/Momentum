//-------------------LOCAL STORAGE-----------------

import { NAME } from "./greeting";
import { CITY } from "./weather";
import { translation } from "./translation";
import { lang } from "./greeting";

CITY.value = `${translation[lang].cityTr}`;
// console.log('local', CITY.value)

function setLocalStorage() {
    localStorage.setItem('name', NAME.value);
    localStorage.setItem('city', CITY.value);
    
    // console.log(CITY.value)
}

function getLocalStorage() {
    if(localStorage.getItem('name')) 
    NAME.value = localStorage.getItem('name');

    if(localStorage.getItem('city')) 
        CITY.value = localStorage.getItem('city');
    
}

export { setLocalStorage, getLocalStorage};