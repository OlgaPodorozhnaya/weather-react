import React, {useState} from "react";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

let[loaded, setLoaded] = useState(false);
let[forecast, setForecast] = useState(null);

function handleResponse (response) {

setForecast(response.data.daily);
setLoaded(true);
// console.log(loaded);
}

if(loaded) {
    console.log(forecast);
    return ( <div className="WeatherForecast" >
    <div className="row">
        <div className="col">
    <WeatherForecastDay data={forecast[0]} />
           
           
        </div>
        </div> 
     </div>);


} else {
    let apiKey="dff5c692192605ee5ed7f95b423ae857";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(handleResponse);
    
    return null;
   }
} 