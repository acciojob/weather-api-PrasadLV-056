function getWeather() {
  const apiKey = 'YOUR_API_KEY_HERE'; // 🔁 Replace with your OpenWeatherMap API key
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .then(data => {
      const condition = data.weather[0].main;
      document.getElementById('weatherData').textContent =
        `Current weather in ${city}: ${condition}`;
    })
    .catch(error => {
      document.getElementById('weatherData').textContent =
        `Error: ${error.message}`;
    });
}
