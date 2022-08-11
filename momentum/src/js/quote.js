//--------------------QUOTES-------------
import { getRandomNum } from "./random-num";


const QUOTE = document.querySelector('.quote');
const AUTHOR = document.querySelector('.author');

async function getQuote(lang) {
  let quote; 
  if (lang = 'en') quote = 'quotes-en.json';
  else quote = 'quotes-ru.json';
  const res = await fetch(quote);
  const data = await res.json();

  let quoteIndex = getRandomNum(1, 30);

  QUOTE.textContent = `${data[quoteIndex].text}`;
  AUTHOR.textContent = `${data[quoteIndex].author}`;
}

export {getQuote};