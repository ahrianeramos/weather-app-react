import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="location-header">
        <div className="col-auto" id="location">{props.data.city}</div>
        <div className="col-6" id="current-date"><FormatDate date = {props.data.date} /></div>
        <div className="col-6" id="description">{props.data.description}</div>
      </div>

      <div className="row" id="temp-row">
        <div className="col-2" id="icon-position">
          <WeatherIcon code={props.data.icon} size={60} />
        </div>
        <div className="col-auto" id="temperature">
          <WeatherTemp temperature={props.data.temperature} />
        </div>
        <div className="col-auto" id="temp-data">
          <ul id="temp-data-ul">
            <li>
              Feels Like {props.data.feelsLike}°C
            </li>
            <li>
              Humidity: {props.data.humidity}%
            </li>
            <li>
              Wind: {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}