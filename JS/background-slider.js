const body = document.querySelector("body");
const previousButton = document.querySelector(".slide-prev");
const nextButton = document.querySelector(".slide-next");


let tempCount = count();
let bgLabrory = '';

function count() {
  let tempCount = `${Math.floor(Math.random() * 20 + 1)}`;
  if (tempCount.length === 1) return `0${tempCount}`
  return tempCount;
}

function getLibrary() {
  let currentTime = new Date().getHours();

  if (currentTime >= 18 && currentTime <= 24) {
    return `evening`;
  } else if (currentTime > 0 && currentTime <= 6) {
    return `night`;
  } else if (currentTime > 6 && currentTime <= 12) {
    return `morning`;
  } else return `afternoon`;
}


function getBackGround() {
  let backgroundLabrary = getLibrary();
  bgLabrory = backgroundLabrary;
  let image = new Image();
  image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${bgLabrory}/${tempCount}.jpg`
  image.onload = () => {
    body.style.backgroundImage = `url(${image.src})`;

    setTimeout(getBackGround, 60000);
  }
}

function backgroundSlider() {
  previousButton.addEventListener('click', () => {
    let funcCount = Number(tempCount) - 1;
    if (String(funcCount).length === 1) {
      funcCount < 1 ? tempCount = '20' : tempCount = `0${String(funcCount)}`;
      let image = new Image();
      image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${bgLabrory}/${tempCount}.jpg`
      image.onload = () => {
        body.style.backgroundImage = `url(${image.src})`;
      }
    } else {
      funcCount < 1 ? tempCount = '20' : tempCount = String(funcCount);
      let image = new Image();
      image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${bgLabrory}/${tempCount}.jpg`
      image.onload = () => {
        body.style.backgroundImage = `url(${image.src})`;
      }
    }
  })

  nextButton.addEventListener('click', () => {
    let funcCount = Number(tempCount) + 1;
    if (String(funcCount).length === 1) {
      funcCount > 20 ? tempCount = '01' : tempCount = `0${String(funcCount)}`;
      let image = new Image();
      image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${bgLabrory}/${tempCount}.jpg`
      image.onload = () => {
        body.style.backgroundImage = `url(${image.src})`;
      }
    } else {
      funcCount > 20 ? tempCount = '01' : tempCount = String(funcCount);
      let image = new Image();
      image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${bgLabrory}/${tempCount}.jpg`
      image.onload = () => {
        body.style.backgroundImage = `url(${image.src})`;
      }
    }
  })

}

export { getBackGround, backgroundSlider }