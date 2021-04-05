import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ ready: false});
  const[city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like)
    })
  }


  function search() {
    const apiKey=`2be57c3d4b0a6b7bb559880d83bc6801`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-auto">
            <input
              type="search"
              placeholder="Enter a city"
              onChange={handleCityChange}
              autoComplete="off"
              autoFocus="on"
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
            />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );

  } else {
    search();
    return "Loading..";
  }
}