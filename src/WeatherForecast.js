import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
          <div className="WeatherForecastDay">Wednesday</div>
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