
document.querySelector('.search').addEventListener('click', function(){
  
  var cityName = document.querySelector('#city-name').value;

  if (!cityName) {
    alert("Please enter city name");
    return;
  }

  fetchWeather(cityName)

  document.querySelector('#city-name').value = ""
})

var fetchWeather = function(cityName){
  const url = "";

  fetch(url, {
    method: 'GET',
    dataType: 'JSON'
    })
    .then(data => data.json())
    .then(data => addWeather(data))
  
}

var addWeather = function(data){
  
}