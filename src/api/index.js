import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY;

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  // Validate API key
  if (!API_KEY) {
    console.error(
      '%c❌ Missing API key. Set REACT_APP_API_KEY in your .env file.',
      'color: red; font-weight: bold;'
    );
    return null;
  }

  // Validate input parameters
  if (!endpoint || !place_id || !measurementSystem) {
    console.error(
      '%c❌ Missing required parameters:',
      'color: orange; font-weight: bold;',
      { endpoint, place_id, measurementSystem }
    );
    return null;
  }

  const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: 'en',
      units: measurementSystem,
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);

    if (!response?.data) {
      console.error(
        '%c⚠️ API returned no data for:',
        'color: yellow; font-weight: bold;',
        endpoint
      );
      return null;
    }

    return response.data;
  } catch (error) {
    console.error(
      '%c🚨 Error fetching weather data:',
      'color: red; font-weight: bold;',
      error?.response?.data || error.message
    );
    return null;
  }
}
