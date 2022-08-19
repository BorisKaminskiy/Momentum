import { isLanguage } from "./language.js";

const time = document.querySelector('.time');
const date = document.querySelector('.datetoday');
const weekday = document.querySelector('.weekday');

function getCurrentTime() {
  const currentTime = new Date();
  time.textContent = currentTime.toLocaleTimeString();
  setTimeout(getCurrentTime, 1000);
}

function getCurrentDate() {
  let options = { month: 'long', day: 'numeric' };
  const currentDate = new Date();

  if (isLanguage) {
    date.textContent = currentDate.toLocaleDateString('ru', options);
  } else {
    date.textContent = currentDate.toLocaleDateString('en-US', options);
  }
  setTimeout(getCurrentDate, 1000);
}

function getCurrentWeekDay() {
  let options = { weekday: 'long' };
  let currentWeekDay = new Date();
  if (isLanguage) {
    weekday.textContent = currentWeekDay.toLocaleDateString("ru", options);
  } else {
    weekday.textContent = currentWeekDay.toLocaleDateString("en-US", options);
  }
  setTimeout(getCurrentWeekDay, 1000);
}


export { getCurrentTime, getCurrentDate, getCurrentWeekDay };