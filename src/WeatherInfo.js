import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="location-header">
          <div className="col-auto" id="location">{props.data.city}</div>
          <div className="col-6" id="current-date"><FormatDate date = {props.data.date} /></div>
          <div className="col-6" id="description">{props.data.description}</div>
        </div>

        <div className="row">
          <div className="col-2" id="icon-position">
            <img 
              src={props.data.iconUrl}
              id="temp-icon" 
              width="100" 
              alt={props.data.description} />
          </div>
          <div className="col-auto" id="temperature">{props.data.temperature}</div>
          <div className="col-auto" id="temp-units">°C | °F</div>
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