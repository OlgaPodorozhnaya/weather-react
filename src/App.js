import React from "react";
import './App.css';

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    dаteday: "23.02.2024",
    description: "Partly Cloudy",
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 0.5
  };
  return (
    <div className="Weather">
      <div className="weather-wrap">
        <div className="weather-border">
          <form className="mb-4">
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Type a city..."
                  class="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul className="current-info current">
              <li> Today {weatherData.dаteday}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row row-cols-2">
            <div className="col">
              <div className="term weather-temperature">
                <img
                  src={weatherData.imageUrl}
                  alt={weatherData.description}
                  className="float-left"
                  id="icon"
                />
                <div className="float-left">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    <a href="" class="active">
                      °C
                    </a>
                    |<a href="">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <ul className="current-info">
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/OlgaPodorozhnaya/weather-app-vanilla "
            target="_blank"
          >
            Open-source code
          </a>
          by Olha Podorozhna
        </small>
      </div>
    </div>
  );
}

