import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.temperature * 9/5) + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="col-auto" id="temperature">{props.temperature}</span>
        <span className="col-auto" id="temp-units"><strong>°C</strong> | {" "}
        <a href="/" onClick={displayFahrenheit}>°F</a></span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="col-auto" id="temperature">{Math.round(fahrenheit())}</span>
        <span className="col-auto" id="temp-units"> 
        <a href="/" onClick={displayCelsius}>°C</a>
        {" "} | {" "} <strong>°F</strong></span>
      </div>
    );
  }
}