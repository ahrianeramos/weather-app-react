import React from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(props) {
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
            autocomplete="off" />
        </div>
      </form>

      <div className="location-header">
        <div className="col-auto" id="location">San Francisco</div>
        <div className="col-6" id="current-date">Wednesday 01:06</div>
        <div className="col-6" id="description">Clear Sky</div>
      </div>

      <div className="row">
        <div className="col-2" id="icon-position">
          <img 
            src="https://openweathermap.org/img/wn/01n@2x.png" 
            id="temp-icon" 
            width="100" 
            alt="temperature icon" />
        </div>
        <div className="col-auto" id="temperature">13</div>
        <div className="col-auto" id="temp-units">°C | °F</div>
        <div className="col-auto" id="temp-data">
          <ul id="temp-data-ul">
            <li>
              Feels like 10 °C
            </li>
            <li>
              Humidity: 51
            </li>
            <li>
              Wind: 2 km/h
            </li>
          </ul>
        </div>
      </div>




    </div>
  );
}