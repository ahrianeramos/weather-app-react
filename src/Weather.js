import React, { useState } from "react";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like)
    })
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="row">
          <div className="col-auto">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              id="search-field"
            />
          </div>
          <div className="col-auto">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary mb-1"
              id="search-btn"
              autoComplete="off" />
          </div>
        </form>

        <div className="location-header">
          <div className="col-auto" id="location">{weatherData.city}</div>
          <div className="col-6" id="current-date"><FormatDate date = {weatherData.date} /></div>
          <div className="col-6" id="description">{weatherData.description}</div>
        </div>

        <div className="row">
          <div className="col-2" id="icon-position">
            <img 
              src={weatherData.iconUrl}
              id="temp-icon" 
              width="100" 
              alt={weatherData.description} />
          </div>
          <div className="col-auto" id="temperature">{weatherData.temperature}</div>
          <div className="col-auto" id="temp-units">°C | °F</div>
          <div className="col-auto" id="temp-data">
            <ul id="temp-data-ul">
              <li>
                Feels Like {weatherData.feelsLike}°C
              </li>
              <li>
                Humidity: {weatherData.humidity}%
              </li>
              <li>
                Wind: {weatherData.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
      
    const apiKey=`2be57c3d4b0a6b7bb559880d83bc6801`;
    let city = "San Francisco";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
      
    return "Loading..";
  }
}