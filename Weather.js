const button = document.querySelector('#btn');
const inputvalue = document.querySelector('#inputvalue');
const city_name = document.querySelector('.city_name');
const discription = document.querySelector('.discrip');
const temperature = document.querySelector('.temp');
const humidit = document.querySelector('.humi');
const winds = document.querySelector('.wind');


button.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=fe39cbc604e5803ac23ba5c024b2b0a3')

    .then((response) => response.json())
    .then((data) => {
      const cityvalue = data["name"]
      const temperaturevlue = data["main"]["temp"]
      const discripvalue = data["weather"][0]["description"];
      const humidity = data["main"]["humidity"]
      const wind = data["wind"]["speed"]

      city_name.innerHTML = cityvalue;
      temperature.innerHTML = 'Temprature:' + "" + temperaturevlue;
      discription.innerHTML = 'Discription:' + "" + discripvalue;
      humidit.innerHTML = 'Humidity:' + "" + humidity;
      winds.innerHTML = 'Wind Speed:' + "" + wind;



    })
    .catch(() => {
      alert("Please enter valid city Name")
    })

});
