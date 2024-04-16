
let Search = document.getElementById("search-input")

let GetWeatherApi = fetch('https://api.weatherapi.com/v1/current.json?key=b73a646210e449e4b9684502242802&q=location' + Search )
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });