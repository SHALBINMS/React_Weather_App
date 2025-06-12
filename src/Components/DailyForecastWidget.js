import WeatherIcon from "./WeatherIcon";

function DailyForecastWidget({ data }) {
  const {
    day,
    icon = 1,
    summary = '',
    temperature_max = 0,
    temperature_min = 0,
    precipitation = {},
  } = data || {};

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date(day)),
  };

  const displayDay = now_date.day === weather_date.day ? 'Today' : weather_date.day;

  return (
    <div className='widget'>
      <div className='day'>{displayDay}</div>
      <div className='icon-temp'>
        <div className='icon'>
          <WeatherIcon icon_num={icon} summary={summary} />
        </div>
        <div className='temperature'>
          <div className='max'>{Math.round(temperature_max)} °C</div>
          <div className='min'>{Math.round(temperature_min)} °C</div>
        </div>
      </div>
      <div className='precipitation'>
        {Math.round(precipitation?.total ?? 0)} mm
      </div>
    </div>
  );
}

export default DailyForecastWidget;
