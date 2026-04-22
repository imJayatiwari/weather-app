async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "YOUR_API_KEY"; // replace this with your real API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("result").innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡️ Temp: ${data.main.temp}°C</p>
                <p>🌤️ Weather: ${data.weather[0].main}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind: ${data.wind.speed} km/h</p>
            `;
        } else {
            document.getElementById("result").innerHTML = "❌ City not found";
        }
    } catch (error) {
        document.getElementById("result").innerHTML = "⚠️ Error fetching data";
    }
}
