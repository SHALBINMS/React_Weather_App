import { createContext,useEffect,useState } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS } from "../Constants";
import { getWeatherData } from "../api";

const weatherContext = createContext();

function WeatherProvider({ children }) {
    const [place,setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.AUTO); // Default to Metric

    useEffect(() => {
  async function _getWeatherData() {
    try {
      setLoading(true);

      // Get current weather
      const cw = await getWeatherData('current', place.place_id, 'auto');
      if (cw && cw.current) {
        setCurrentWeather(cw.current);
      } else {
        console.error("Invalid response for current weather:", cw);
        setCurrentWeather({});
      }

      // Get hourly forecast
      const hf = await getWeatherData('hourly', place.place_id, 'auto');
      if (hf && hf.hourly) {
        setHourlyForecast(hf.hourly?.data||[]);
      } else {
        console.error("Invalid response for hourly forecast:", hf);
        setHourlyForecast([]);
      }

      // Get daily forecast
      const df = await getWeatherData('daily', place.place_id, 'auto');
      if (df && df.daily) {
        setDailyForecast(df.daily?.data||[]);
      } else {
        console.error("Invalid response for daily forecast:", df);
        setDailyForecast([]);
      }

    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setCurrentWeather({});
      setHourlyForecast([]);
      setDailyForecast([]);
    } finally {
      setLoading(false);
    }
  }

  _getWeatherData();
}, [place]);

  return (
    <weatherContext.Provider value={{place,
    loading,
    currentWeather,
    hourlyForecast,
    dailyForecast,measurementSystem,setMeasurementSystem,setPlace,setLoading,setCurrentWeather,setHourlyForecast,setDailyForecast,getWeatherData}}>
      {children}
    </weatherContext.Provider>
  );
}
export {WeatherProvider}
export default weatherContext;