import React from 'react'
import { useContext } from 'react'
import weatherContext from '../Context/weather.context'

function Place() {
  const { place } = useContext(weatherContext);
  return (
    <div className='Place'>
    <i className="bi bi-geo-alt"></i>   <b>{place.name}</b>, {''} {place.country}
    </div>
  )
}

export default Place
