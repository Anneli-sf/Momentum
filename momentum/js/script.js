const TIME = document.querySelector(".time");



//----------------------------when the page load---------------
// window.addEventListener('DOMContentLoaded', loadPage);

// function loadPage() {
//     showTime();
    
// }


//-----------------------------WATCH------------------
function showTime() {
    const DATE = new Date();
    const CURRENT_TIME = DATE.toLocaleTimeString();
    TIME.textContent = CURRENT_TIME;
    setTimeout(showTime, 1000);
}


showTime();

