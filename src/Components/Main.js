import Forecast from './Forecast';
import CurrentWeather from './CurrentWeather';
import '../styles/components/Main.scss'; 
import { getDailyForecast } from '../api';  
import { getHourlyForecast } from '../api';

function Main() {
  return (
    <div className='Main'>
      <CurrentWeather/>

      <Forecast type="hourly" 
      title="Hourly Forecast"
      data={getHourlyForecast()}
       />

      <Forecast type="daily"
       title="21 Days Forecast"
       data={getDailyForecast()}/>

    </div>
  )
}

export default Main
