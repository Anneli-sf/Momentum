//-------------------LOCAL STORAGE-----------------

const NAME = document.querySelector(".name");

function setLocalStorage() {
    localStorage.setItem('name', NAME.value);
}

function getLocalStorage() {
    if(localStorage.getItem('name')) 
        NAME.value = localStorage.getItem('name');
    
}

export {NAME, setLocalStorage, getLocalStorage};