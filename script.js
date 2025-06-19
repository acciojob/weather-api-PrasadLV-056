<script>
  async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // 🔑 Replace this with your actual OpenWeatherMap API key
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const weatherDescription = data.weather[0].main;

      document.getElementById("weatherData").innerText =
        `Current weather in ${city}: ${weatherDescription}`;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherData").innerText =
        "Failed to retrieve weather data.";
    }
  }
</script>
