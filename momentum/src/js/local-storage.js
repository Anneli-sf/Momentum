//-------------------LOCAL STORAGE-----------------

const NAME = document.querySelector(".name");
const CITY = document.querySelector(".city");

function setLocalStorage() {
    localStorage.setItem('name', NAME.value);
    localStorage.setItem('city', CITY.value);
}

function getLocalStorage() {
    if(localStorage.getItem('name')) 
    NAME.value = localStorage.getItem('name');

    if(localStorage.getItem('city')) 
        CITY.value = localStorage.getItem('city');
    
}

export {CITY, setLocalStorage, getLocalStorage};