const axios = require("axios");


const city = process.argv[2];

if (!city) {
  console.log("Please provide a city name.");
  process.exit(1);
}

const API_KEY = "234c31046ac7674bb843bd779af813d4"; // from weather API

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

axios.get(url)
  .then(response => {
    const temp = response.data.main.temp;
    const description = response.data.weather[0].description;

    console.log(`Weather in ${city}: ${temp}°C, ${description}`);
  })
  .catch(error => {
    console.log("Error fetching weather. Please check the city name.");
  });
