import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWeather } from '../contexts/WeatherContext';
import { formatDate, formatTime } from '../utils/dateFormatter';
import { formatTemperature } from '../utils/temperatureConverter';
import WeatherDetails from './WeatherDetails';
import ErrorMessage from './ErrorMessage';
import LoadingIndicator from './LoadingIndicator';

const WeatherDisplay = () => {
  const { t, i18n } = useTranslation();
  const { weatherData, loading, error, unit } = useWeather();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage errorCode={error} />;
  }

  if (!weatherData) {
    return <div className="no-data">{t('no_data')}</div>;
  }

  const { main, weather, sys, name, dt } = weatherData;
  
  return (
    <div className="weather-display">
      <div className="location-info">
        <h2>{name}, {sys.country}</h2>
        <p>{formatDate(dt, i18n.language)}</p>
        <p>{formatTime(dt, i18n.language)}</p>
      </div>
      
      <div className="temperature-display">
        <div className="current-temp">
          {formatTemperature(main.temp, i18n.language, unit)}
        </div>
        <div className="feels-like">
          {t('feels_like')}: {formatTemperature(main.feels_like, i18n.language, unit)}
        </div>
      </div>
      
      <div className="weather-condition">
        <img 
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
          alt={weather[0].description} 
        />
        <p>{weather[0].description}</p>
      </div>
      
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
};

export default WeatherDisplay;
