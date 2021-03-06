import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherList = (props) => {
  const hourly = props.hourlyWeather.hourly;
  let hours = new Date().getHours();
  const getHour = () => {
    if (hours === 24) {
      hours = 0;
    }
    if (hours < 24) {
      return hours++;
    } else {
      return hours;
    }
  };

  return (
    <div className="weather-list">
      {hourly &&
        hourly.map((hour) => {
          if (hourly.indexOf(hour) === 0) {
            return (
              <WeatherCard
                units={props.units}
                hour={hour}
                key={Math.random()}
                hours="now"
                temp={hour.temp}
                icon={hour.weather[0].icon}
              />
            );
          } else {
            return (
              <WeatherCard
                units={props.units}
                hour={hour}
                key={Math.random()}
                hours={getHour()}
                temp={hour.temp}
                icon={hour.weather[0].icon}
              />
            );
          }
        })}
    </div>
  );
};

export default WeatherList;
