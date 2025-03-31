import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchWeatherData, fetchForecastData, fetchWeatherByGeolocation } from '../utils/api';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState(() => {
    return localStorage.getItem('temperatureUnit') || 'celsius';
  });

  // Save temperature unit preference
  useEffect(() => {
    localStorage.setItem('temperatureUnit', unit);
  }, [unit]);

  // Get user's current location on initial load
  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        try {
          setLoading(true);
          navigator.geolocation.getCurrentPosition(async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const weatherData = await fetchWeatherByGeolocation(
                latitude, 
                longitude, 
                i18n.language
              );
              setWeatherData(weatherData);
              setCity(weatherData.name);
              
              // Also fetch forecast data
              const forecast = await fetchForecastData(weatherData.name, i18n.language);
              setForecastData(forecast);
              
              setError(null);
            } catch (error) {
              setError('geolocation_failed');
            } finally {
              setLoading(false);
            }
          }, () => {
            setError('geolocation_denied');
            setLoading(false);
          });
        } catch (error) {
          setError('geolocation_error');
          setLoading(false);
        }
      } else {
        setError('geolocation_not_supported');
        setLoading(false);
      }
    };
    
    getUserLocation();
  }, [i18n.language]);

  // Fetch weather when city changes or language changes
  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const weather = await fetchWeatherData(city, i18n.language);
        setWeatherData(weather);
        
        const forecast = await fetchForecastData(city, i18n.language);
        setForecastData(forecast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchWeather();
  }, [city, i18n.language]);

  const searchCity = (newCity) => {
    setCity(newCity);
  };

  const toggleUnit = () => {
    setUnit(prevUnit => prevUnit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        weatherData,
        forecastData,
        loading,
        error,
        unit,
        searchCity,
        toggleUnit
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
