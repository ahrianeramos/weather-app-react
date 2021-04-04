import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY", // clear day
    "01n": "CLEAR_NIGHT", // clear night
    "02d": "PARTLY_CLOUDY_DAY", // few clouds 
    "02n": "PARTLY_CLOUDY_NIGHT", 
    "03d": "PARTLY_CLOUDY_DAY", // scattered clouds 
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY", //broken clouds
    "04n": "CLOUDY",
    "09d": "SLEET", //shower rain
    "09n": "SLEET", 
    "10d": "RAIN", //rain
    "10n": "RAIN", 
    "11d": "RAIN", // thunderstrom
    "11n": "RAIN",
    "13d": "SNOW", // snow
    "13n": "SNOW",
    "50d": "FOG", // mist
    "50n": "FOG"
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#000000"
      size={55}
      animate={true}
      />
    );
}

