//--------------------QUOTES-------------
import { getRandomNum } from "./random-num";

const QUOTE = document.querySelector('.quote');
const AUTHOR = document.querySelector('.author');

async function getQuote(lang) {
  let quote = 'quotes.json';
  
  const res = await fetch(quote);
  const data = await res.json();

  let quoteIndex = getRandomNum(1, 29);

  QUOTE.textContent = `${data[lang][quoteIndex].text}`;
  AUTHOR.textContent = `${data[lang][quoteIndex].author}`;
}

export {getQuote};