import "./styles.css";

// Date
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentYear = date.getFullYear();
let currentDay = days[date.getDay()];
let currentMonth = months[date.getMonth()];
let currentDate = date.getDate();
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dataElement = document.querySelector("#data");

dataElement.innerHTML = `Today is ${currentDay} ${hours}:${minutes}, ${currentMonth} ${currentDate}, ${currentYear}`;

//City h1
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityForecast1 = document.querySelector("#city-forecast1");
  let cityForecast2 = document.querySelector("#city-forecast2");
  let cityForecast3 = document.querySelector("#city-forecast3");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = `Weather in ${cityInput.value}`;
  cityForecast1.innerHTML = `Today forecast for  ${cityInput.value}`;
  cityForecast2.innerHTML = `Daily forecast for next 5 days in ${cityInput.value}`;
  cityForecast3.innerHTML = `Hourly forecast for next 5 hours in ${cityInput.value}`;
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", search);

// get Temperature
//function showTemp(response) {
//document.querySelector("#city-input").innerHTML = response.data.name;
//document.querySelector("#temperature").innerHTML = Math.round(
//response.data.main.temp
// );
//}
function searchCity(event) {
  event.preventDefault();
  let apiKey = "ed06badfca3d14e8a05198abd3b77160";
  let cityT = "Kiev";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityT}&appid=${apiKey}`;
  console.log(apiUrl);
  // axios.get(apiUrl).then(showTemp);
}
//function handleSubmit(event) {
//event.preventDefault();
//let city = document.querySelector("#city-input").value;
//searchCity(city);
//}

//Convert doesnt work need repear
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
