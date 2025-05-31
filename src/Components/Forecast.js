import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';
import '../styles/components/Forecast.scss';

function Forecast({ title, type, data }) {
  if (!data || !Array.isArray(data)) {
    return <div className="Forecast">Loading...</div>;
  }

  return (
    <div className='Forecast'>
      <div className='forecast-container'>
        <h3>{title}</h3>
        <div className='widget-container'>
          {data.map((singleData, index) => (
            <div key={index}>
              {type === 'hourly' ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
