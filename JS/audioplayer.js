import { playList } from "./playlist.js";

let audio = new Audio();
let randomNum = 0
let isPlay = false
const playListContainer = document.querySelector(".play-list");
const playBttn = document.querySelector(".play");
const leftBttn = document.querySelector('.play-prev');
const rightBttn = document.querySelector('.play-next');


function createAudioItem() {
  playList.map(item => {

    const li = document.createElement("li");
    li.classList.add("play-item");
    li.innerHTML = `${item.title} - ${item.author}`
    // li.textContent = item.title;
    playListContainer.append(li);
  })
}

function activeItem() {
  const playItems = playListContainer.querySelectorAll('.play-item');
  playItems.forEach(item => item.classList.remove('play-item-active'));
  playItems[randomNum].classList.add('play-item-active');
}

function playButton() {
  playBttn.addEventListener('click', () => {
    if (!isPlay) {
      playTrack()
    } else { pauseTrack() }
  })
}

function previousButton() {
  leftBttn.addEventListener('click', () => {
    if (randomNum === 0) {
      randomNum = playList.length - 1;
    } else { randomNum -= 1 }

    playTrack();
  })
}

function nextButton() {
  rightBttn.addEventListener('click', () => {
    if (randomNum === playList.length - 1) {
      randomNum = 0;
    } else { randomNum += 1 }
    playTrack();
  })
}

function toggleButton() {
  if (isPlay) {
    playBttn.classList.add('pause');
  } else {
    playBttn.classList.remove('pause');
  }
}

function playTrack() {
  audio.pause();
  activeItem()
  audio.src = playList[randomNum].src;
  audio.currentTime = 0;
  isPlay = true;
  toggleButton();
  audio.addEventListener('ended', () => {
    isPlay = false;
    toggleButton();
  })
  audio.play();
}

function pauseTrack() {
  isPlay = false;
  toggleButton();
  audio.pause();
}





export { playButton, previousButton, nextButton, createAudioItem };