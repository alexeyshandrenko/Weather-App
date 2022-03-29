import React from "react"
import Header from "./Header"
import WeatherInfo from "./WeatherInfo"

const WeatherDay = (props) => {
    return(
        <div className="wrapper">
            <Header weather={props.weatherData}/>
            <WeatherInfo weather={props.weatherData}/>
        </div>
    )
}

export default WeatherDay