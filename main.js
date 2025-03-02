document.querySelector('.search').addEventListener('click', function(event) {
  event.preventDefault();
  const cityName = document.querySelector('#city-name').value;

  if (!cityName) {
    alert("Please enter city name");
    return;
  }

  fetchWeather(cityName);
  document.querySelector('#city-name').value = "";
});

const fetchWeather = function(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6b1b3ebef7a7e650e8bff4f1b84115be&units=imperial`;

  fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(data => addWeather(data))
    
};

const addWeather = (data) => {
  const weatherInfo = {
    conditions: data.weather[0].description || null,
    temperature: `${data.main.temp}°F` || null,
    icon_url: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || null,
    day: new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }) || null
  };

  const template = `
    <div class="col-md-2 col-sm-4 weather-card">
      <p>${weatherInfo.conditions}</p>
      <h3>${weatherInfo.temperature}</h3>
      <img src="${weatherInfo.icon_url}" alt="${weatherInfo.conditions}" class="weather-icon">
      <p><strong>${weatherInfo.day}</strong></p>
    </div>`;

  
  
    document.getElementById("forecast-cards").insertAdjacentHTML("beforeend", template);
};