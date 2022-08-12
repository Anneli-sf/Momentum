//--------------------TRANSLATION-------------

const LANGUAGE_OPTION = document.querySelector('.change-language');
let language = 'en';

function changeLanguage() {
//   if (LANGUAGE_OPTION.value == 'en') lang = 'en';
//    else lang = 'ru';
    language = LANGUAGE_OPTION.value;
  console.log('language', language)
  return language;
}

// export {LANGUAGE_OPTION, language, changeLanguage};
