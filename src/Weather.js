import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
let [city, setCity] = useState(props.defaultCity);
const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});
function handleResponse (response) {
    // console.log(response.data);
    setWeatherData({temperature: response.data.main.temp,
                   wind: response.data.wind.speed,
                   city: response.data.name,
                description: response.data.weather[0].description,
                humidity: response.data.main.humidity,
                icon:response.data.weather[0].icon,
                date: new Date(response.data.dt * 1000),
                coordinates: response.data.coord,
                

            });
   
    setReady(true);

}

function search (){
    const apiKey="aaa78765b6bb0a06edf7d2c2bcb73ade";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();

    search();
}

function handleCityChange (event){
setCity(event.target.value);
}

if (ready){
    return (<div className="Weather">
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9"> 
            <input
                 type="search"
                  placeholder="Enter a city..."
                   className="form-control"
                   autoFocus="on"
                   onChange={handleCityChange}>
            </input>
            </div>
            <div className="col-3"> 
            <input type="submit"
                   value="Search" 
                   className="btn btn-primary w-100">
            </input>
            </div>
        </div>
       
       
    </form>
<WeatherInfo  data={weatherData}/>
<WeatherForecast coordinates={weatherData.coordinates}/>
</div>
)
} else {
    search();

   return "Loading...";
}
  }
  