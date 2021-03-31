import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";


export default function Weather(props) {
  
  function showTemp(response) {
    let city = response.data.name;
    let temp = Math.round(response.data.main.temp);
    console.log(`the temp in ${city} is ${temp}°F`);
  }
  
  let apiKey = `d181817faaf7ac4148d91ac2cdf0c65a`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showTemp);
  return (
    <Loader
        type="Bars"
        color="#F7F3FF"
        secondaryColor="#00BFFF"
        height={200}
        width={200}
        timeout={5000} //1000 for 1 sec
     />
  );
}