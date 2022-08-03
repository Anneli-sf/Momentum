const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");



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
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    DATE.textContent = currentDate;
}


//-----------------------------GREETING------------------
const GREETING = document.querySelector(".greeting");


showGreeting();
function showGreeting() {
    //обеспеч отображение приветсвия
    //обновляется - ф-ия

    
}
getTimeOfDay();
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    const currentOur = Math.floor(hours / 6);
    console.log(typeof currentOur);

    let timesOfDay = [
        'night',
        'morning',
        'afternoon',
        'evening'
    ];

    // let currTimeOfDay = () => {
    //     for (let i=0; i < timesOfDay.length; i++) {
    //     if (i == currentOur) return timesOfDay[i];
    // }
    // }

    let currTimeOfDay = timesOfDay.reduce((total, el, index) => {
        if (index == currentOur) total = el;
        return total 
    })
console.log(currTimeOfDay);
    
}