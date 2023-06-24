let cityname = document.getElementById('city');
let temperature = document.getElementById('temp');
let wind = document.getElementById('wind');
let desc = document.getElementById('desc');
let city = prompt("Enter City Name.")
let weatherApi = fetch(`https://goweather.herokuapp.com/weather/${city}`);
weatherApi.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((value) => {
    console.log(value);
    cityname.innerText = `City: ${city}`;
    temperature.innerText = `Temprature: ${value.temperature}`;
    wind.innerText =`Wind: ${value.wind}`;
    desc.innerText =`Weather: ${value.description}`;
})