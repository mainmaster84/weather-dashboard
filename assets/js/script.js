var button = document.querySelector("#submit")
var inputValue = document.querySelector("#input")
var cityName = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var temp1 = document.querySelector(".temp1");
var wind1 = document.querySelector(".wind1");
var humidity1 = document.querySelector(".humidity1");
var temp2 = document.querySelector(".temp2");
var wind2 = document.querySelector(".wind2");
var humidity2 = document.querySelector(".humidity2");
var temp3 = document.querySelector(".temp3");
var wind3 = document.querySelector(".wind3");
var humidity3 = document.querySelector(".humidity3");
var temp4 = document.querySelector(".temp4");
var wind4 = document.querySelector(".wind4");
var humidity4 = document.querySelector(".humidity4");
var temp5 = document.querySelector(".temp5");
var wind5 = document.querySelector(".wind5");
var humidity5 = document.querySelector(".humidity5");

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=97fb5c2684461e68a8d7665e8b1391c4&units=imperial')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    var nameValue = data.name;
    var tempValue = Math.round(data.main.temp);
    var windVaule = Math.round(data.wind.speed);
    var humidityValue = data.main.humidity;
    var descValue = data.weather[0].description;
    
    cityName.innerHTML = "City:" + " " + nameValue;
    temp.innerHTML = "Temp:" + " " + tempValue + '&deg' + 'F';
    wind.innerHTML = "Wind:" + " " + windVaule + " " + 'MPH';
    humidity.innerHTML = "Humidity:" + " " + humidityValue + " " + '%';
    desc.innerHTML = "Description:" + " " + descValue;
  })
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=97fb5c2684461e68a8d7665e8b1391c4&units=imperial')
    .then(response => response.json())
    .then(data => {
    console.log(data);
      
    var tempValue1 = Math.round(data.list[0].main.temp);
    var windVaule1 = Math.round(data.list[0].wind.speed);
    var humidityValue1 = data.list[0].main.humidity;
    temp1.innerHTML = "Temp:" + " " + tempValue1 + '&deg' + 'F';
    wind1.innerHTML = windVaule1 + " " + 'MPH';
    humidity1.innerHTML = "Humidity:" + " " + humidityValue1 + " " + '%';

    var tempValue2 = Math.round(data.list[1].main.temp);
    var windVaule2 = Math.round(data.list[1].wind.speed);
    var humidityValue2 = data.list[1].main.humidity;
    temp2.innerHTML = "Temp:" + " " + tempValue2 + '&deg' + 'F';
    wind2.innerHTML = "Wind:" + " " + windVaule2 + " " + 'MPH';
    humidity2.innerHTML = "Humidity:" + " " + humidityValue2 + " " + '%';

    var tempValue3 = Math.round(data.list[2].main.temp);
    var windVaule3 = Math.round(data.list[2].wind.speed);
    var humidityValue3 = data.list[2].main.humidity;
    temp3.innerHTML = "Temp:" + " " + tempValue3 + '&deg' + 'F';
    wind3.innerHTML = "Wind:" + " " + windVaule3 + " " + 'MPH';
    humidity3.innerHTML = "Humidity:" + " " + humidityValue3 + " " + '%';

    var tempValue4 = Math.round(data.list[3].main.temp);
    var windVaule4 = Math.round(data.list[3].wind.speed);
    var humidityValue4 = data.list[3].main.humidity;
    temp4.innerHTML = "Temp:" + " " + tempValue4 + '&deg' + 'F';
    wind4.innerHTML = "Wind:" + " " + windVaule4 + " " + 'MPH';
    humidity4.innerHTML = "Humidity:" + " " + humidityValue4 + " " + '%';

    var tempValue5 = Math.round(data.list[4].main.temp);
    var windVaule5 = Math.round(data.list[4].wind.speed);
    var humidityValue5 = data.list[4].main.humidity;
    temp5.innerHTML = "Temp:" + " " + tempValue5 + '&deg' + 'F';
    wind5.innerHTML = "Wind:" + " " + windVaule5 + " " + 'MPH';
    humidity5.innerHTML = "Humidity:" + " " + humidityValue5 + " " + '%';
    
  })
  
  localStorage.setItem("cityName", JSON.stringify(cityName));

})