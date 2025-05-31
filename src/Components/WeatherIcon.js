import React from 'react'

function WeatherIcon({icon_num, summary}) {
  return (
    <img src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/big/${icon_num}.png`}
     alt={summary}
    />
  )
}

export default WeatherIcon
