const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date")

//----------------------------when the page load---------------
window.addEventListener('DOMContentLoaded', loadPage);

function loadPage() {
    showTime();
    
}


//-----------------------------WATCH------------------
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    TIME.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

function showDate() {
    const date = new Date;
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    DATE.textContent = currentDate;
}

