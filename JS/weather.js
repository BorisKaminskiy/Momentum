const city = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");
const dayTemperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity"); 

function getCity() {
  city.addEventListener('input', () => {
    localStorage.setItem('city', city.value);
  });
}


function getWeatherForecast() {
  if (localStorage.getItem('city')) {
    let cityValue = localStorage.getItem('city');
    let apiKey = '921fe7478c5b16db85296a16a694412d';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=en&appid=${apiKey}&units=metric`; 
    fetch(url)
    .then(res => res.json())
    .then(data => {
      
      city.value = localStorage.getItem('city')
      weatherIcon.classList.add(`owf-${data['weather'][0]['id']}`);
      dayTemperature.textContent = `${Math.floor(data.main.temp)}°C`;
      weatherDescription.textContent = `${data.weather[0].description}`;
      wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)}m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    })
  } else { getCity() } 
}

function getWeatherForecastRu() {
  if (localStorage.getItem('city')) {
    let cityValue = localStorage.getItem('city');
    let apiKey = '921fe7478c5b16db85296a16a694412d';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=ru&appid=${apiKey}&units=metric`; 
    fetch(url)
    .then(res => res.json())
    .then(data => {
      
      city.value = localStorage.getItem('city')
      weatherIcon.classList.add(`owf-${data['weather'][0]['id']}`);
      dayTemperature.textContent = `${Math.floor(data.main.temp)}°C`;
      weatherDescription.textContent = `${data.weather[0].description}`;
      wind.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)}м/с`;
      humidity.textContent = `Влажность: ${data.main.humidity}%`;
    })
  } else { getCity() } 
}

export { getWeatherForecast, getWeatherForecastRu }

