import { isLanguage } from "./language.js";

const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

function getUserName() {
  name.addEventListener('input', () => {
    localStorage.setItem('name', name.value);
  });
}

function userName() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  } else { getUserName() }
}

function getGreetingEn() {
  let currentTime = new Date().getHours();

  if (currentTime >= 18 && currentTime < 24) {
    return `Good evening, `;
  } else if (currentTime >= 0 && currentTime < 6) {
    return `Good night, `;
  } else if (currentTime >= 6 && currentTime < 12) {
    return `Good morning, `;
  } else return `Good afternoon, `;
}

function getGreetingRu() {
  let currentTime = new Date().getHours();

  if (currentTime >= 18 && currentTime < 24) {
    return `Добрый вечер, `;
  } else if (currentTime >= 0 && currentTime < 6) {
    return `Доброй ночи, `;
  } else if (currentTime >= 6 && currentTime < 12) {
    return `Доброе утро, `;
  } else return `Добрый день, `;
}


function printGreeting() {
  if (isLanguage) {
    greeting.textContent = getGreetingEn();
  } else {
    greeting.textContent = getGreetingRu();
  }

  setTimeout(printGreeting, 60000);
}


export { printGreeting, userName };


