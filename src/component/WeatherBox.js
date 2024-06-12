import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather", weather)

  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>현재 온도 : {weather?.main.temp}도</h2>
        <h2>최고 온도 : {weather?.main.temp_max}도 </h2>
        <h2>최저 온도 : {weather?.main.temp_min}도 </h2>
        <h3>{weather?. weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox