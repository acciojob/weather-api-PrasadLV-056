document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const apiKey = "YOUR_API_KEY"; // 🔑 Replace with your OpenWeatherMap API key
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.weather && data.weather.length > 0) {
        const weather = data.weather[0].main;
        document.getElementById("weatherData").innerText =
          `Current weather in ${city}: ${weather}`;
      } else {
        document.getElementById("weatherData").innerText =
          "Weather data not available.";
      }
    })
    .catch(error => {
      document.getElementById("weatherData").innerText =
        "Error fetching weather data: " + error.message;
    });
});
