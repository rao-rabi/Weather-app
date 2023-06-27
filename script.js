function clickMe() {
    let input = document.getElementById('input');
    let cityname = document.getElementById('city');
    let temperature = document.getElementById('temp');
    let wind = document.getElementById('wind');
    let desc = document.getElementById('desc');

    let weatherApi = fetch(`https://goweather.herokuapp.com/weather/${input.value}`);
    weatherApi.then((response) => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    }).then((value) => {
        console.log(value);
        cityname.innerText = `${input.value.toUpperCase()}`;
        temperature.innerText = `Temprature: ${value.temperature}`;
        wind.innerHTML = `<img src="/images/wind.png" width="50px" height="50px">
                        <div style="margin-top:-22px;"><p style="margin-bottom:0px;font-size:38px">${value.wind}</p>
                        <p style="font-size:15px;margin-top:0px;">Wind Speed</p></div>`;
        desc.innerHTML = `<p>Weather: ${value.description}</p>`;
    })
    // function weatherImg(){
    //     if(value.description == '')
    //  }
}
