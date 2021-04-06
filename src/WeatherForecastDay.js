import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecastDay">
        {day()}
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <br />
      <span className="WeatherForecastTempMax">{Math.round(props.data.temp.max)}°</span>
      {" "}
      <span className="WeatherForecastTempMin">{Math.round(props.data.temp.min)}°</span>
    </div>
  );
}