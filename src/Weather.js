import React from "react";
import axios from "axios";

export default function Weather() {
  function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  alert(`the temp is ${temp}`);
  }

  let apiKey = `d181817faaf7ac4148d91ac2cdf0c65a`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
  return (
    <p>hello from weather</p>
  );
}