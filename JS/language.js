import { getCurrentTime, getCurrentDate, getCurrentWeekDay } from './time.js';
import { printGreeting, userName } from './greeting.js';
import { getQuotesEng, getQuotesRu } from './quote.js';
import { getBackGround, backgroundSlider } from './background-slider.js';
import { getWeatherForecast, getWeatherForecastRu } from './weather.js';
import { playButton, previousButton, nextButton, createAudioItem } from './audioplayer.js';



const language = document.querySelector('.language');

let isLanguage = true;

function changeLanguage() {

  if (isLanguage) {
    language.innerHTML = `EN`;
    isLanguage = false;
  } else {
    language.innerHTML = `RU`;
    isLanguage = true;
  }
}

function checkLanguage() {
  backgroundSlider();
  getBackGround();
  getCurrentTime();
  userName();
  playButton();
  previousButton();
  nextButton();
  createAudioItem();
  getCurrentDate();
  getCurrentWeekDay();
  printGreeting();
  getQuotesEng();
  getWeatherForecast();
  changeLanguage();

  language.addEventListener('click', () => {
    if (isLanguage) {
      printGreeting();
      getQuotesEng();
      getWeatherForecast();
      changeLanguage();

    } else {
      printGreeting();
      changeLanguage();
      getQuotesRu();
      getWeatherForecastRu();
      
   
    }

  });

}

export { checkLanguage, isLanguage };