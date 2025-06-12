import React, { useContext } from 'react';
import weatherContext from '../Context/weather.context';
import Loader from './Loader';
import Forecast from './Forecast';
import CurrentWeather from './CurrentWeather'; // Make sure this component exists and is correctly exported
import '../styles/components/Main.scss'; 

function Main() {
  const { loading, currentWeather, dailyForecast, hourlyForecast } = useContext(weatherContext);
  console.log({ loading, currentWeather, dailyForecast, hourlyForecast });
  console.log("Hourly Forecast:", hourlyForecast);
  console.log("Daily Forecast:", dailyForecast);


  return (
    <div className='Main'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather} />

          <Forecast
            type="hourly"
            title="Hourly Forecast"
            data={hourlyForecast}
          />

          <Forecast
            type="daily"
            title="21 Days Forecast"
            data={dailyForecast}
          />
          
        </>
      )}
    </div>
  );
}

export default Main;
