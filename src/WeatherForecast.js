import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = `2be57c3d4b0a6b7bb559880d83bc6801`;
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}$units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Tue</div>
          <WeatherIcon code="01d" size="40" />
          <br />
          <span className="WeatherForecastTempMax">20°</span>
          {" "}
          <span className="WeatherForecastTempMin">10°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Wed</div>
          <WeatherIcon code="01d" size="40" />
          <br />
          <span className="WeatherForecastTempMax">20°</span>
          {" "}
          <span className="WeatherForecastTempMin">10°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code="01d" size="40" />
          <br />
          <span className="WeatherForecastTempMax">20°</span>
          {" "}
          <span className="WeatherForecastTempMin">10°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Fri</div>
          <WeatherIcon code="01d" size="40" />
          <br />
          <span className="WeatherForecastTempMax">20°</span>
          {" "}
          <span className="WeatherForecastTempMin">10°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Sat</div>
          <WeatherIcon code="01d" size="40" />
          <br />
          <span className="WeatherForecastTempMax">20°</span>
          {" "}
          <span className="WeatherForecastTempMin">10°</span>
        </div>
      </div>
    </div>
  );  
}