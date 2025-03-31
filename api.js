const API_KEY = '************';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city, lang = 'en') => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&lang=${lang}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('city_not_found');
      } else {
        throw new Error('api_error');
      }
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchForecastData = async (city, lang = 'en') => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&lang=${lang}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('city_not_found');
      } else {
        throw new Error('api_error');
      }
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchWeatherByGeolocation = async (lat, lon, lang = 'en') => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}`
    );
    
    if (!response.ok) {
      throw new Error('api_error');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};
