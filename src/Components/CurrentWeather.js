import { useState, useEffect } from 'react';
import '../styles/components/CurrentWeather.scss';
import { getCurrentWeather } from '../api';
import WeatherIcon from './WeatherIcon'; // Assuming you have a WeatherIcon component

function CurrentWeather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const weather = getCurrentWeather();
    setData(weather);
  }, []);

  if (!data) {
    return <div className='CurrentWeather'>Loading...</div>;
  }

  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    pressure,
    temperature,
    uv_index,
    visibility,
    wind,
    summary,
    units,
  } = data;
const unitMap = {
  wind_speed: 'km/h',
  humidity: '%',
  uv_index: '',
  cloud_cover: '%',
  visibility: 'km',
  precipitation: 'mm',
};

const otherInfoWidgets = [
  {
    id: 0,
    icon: 'droplet',
    name: 'Precipitation',
    value: Math.round(precipitation.total),
    unit: unitMap.precipitation,
  },
  {
    id: 1,
    icon: 'wind',
    name: 'Wind',
    value: Math.round(wind.speed),
    unit: unitMap.wind_speed,
  },
  {
    id: 2,
    icon: 'moisture',
    name: 'Humidity',
    value: Math.round(humidity),
    unit: unitMap.humidity,
  },
  {
    id: 3,
    icon: 'sunglasses',
    name: 'UV index',
    value: Math.round(uv_index),
    unit: unitMap.uv_index,
  },
  {
    id: 4,
    icon: 'clouds-fill',
    name: 'Clouds cover',
    value: Math.round(cloud_cover),
    unit: unitMap.cloud_cover,
  },
  {
    id: 5,
    icon: 'eye',
    name: 'Visibility',
    value: Math.round(visibility),
    unit: unitMap.visibility,
  },
];


  return (
    <div className='CurrentWeather'>
      <div className='temperature'>
        <div className='weather-icon'>
         <WeatherIcon
            icon_num={icon_num}
            summary={summary}
          />
        </div>

        <div className='value'>
          <div className='real'>{temperature}°C</div>
          <div className='feels-like'>Feels like: {feels_like}°C</div>
          <div className='summary'>{summary}</div>
        </div>
      </div>

      <div className='other-infos'>
        {otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
          <div className='widget' key={id}>
            <div className='widget-container'>
              <div className='info'>
                <div className='icon'>
                  <i className={`bi bi-${icon}`}></i>
                </div>
                <div className='value'>{value} {unit}</div>
              </div>
              <div className='name'>{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentWeather;
