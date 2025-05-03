const APIKEY = "";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// document.querySelector(".weather").innerHTML = "";
async function checkWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&untis=imperial`;
  const response = await fetch(url);
  if (response.status !== 404) {
    document.querySelector(".error").style.display = "none";
    var data = await response.json();
    console.log(data);
    const temperature = Math.floor(data.main.temp / 10);
    console.log(temperature);
    const cityName = data.name;
    console.log(city);
    const humidity = data.main.humidity;
    // console.log(humidity);
    const windSpeed = data.wind.speed;
    // console.log(windSpeed);
    mainWeatherCond = `${data.weather[0].main.toLowerCase()}.png`;
    // console.log(mainWeatherCond);
    document.querySelector(".city").innerHTML = cityName;
    document.querySelector(".temp").innerHTML = temperature + "°C";
    document.querySelector(".humidity").innerHTML = `${humidity}%`;
    document.querySelector(".wind").innerHTML = `${windSpeed}`;
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
