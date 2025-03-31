import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWeather } from '../contexts/WeatherContext';
import { formatTime } from '../utils/dateFormatter';
import { formatTemperature } from '../utils/temperatureConverter';

const WeatherDetails = ({ weatherData }) => {
  const { t, i18n } = useTranslation();
  const { unit } = useWeather();
  
  const { main, wind, sys, visibility } = weatherData;

  return (
    <div className="weather-details">
      <h3>{t('weather_details')}</h3>
      
      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">{t('humidity')}</span>
          <span className="detail-value">
            {new Intl.NumberFormat(i18n.language).format(main.humidity)}%
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">{t('pressure')}</span>
          <span className="detail-value">
            {new Intl.NumberFormat(i18n.language).format(main.pressure)} hPa
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">{t('visibility')}</span>
          <span className="detail-value">
            {new Intl.NumberFormat(i18n.language, { 
              maximumFractionDigits: 1 
            }).format(visibility / 1000)} km
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">{t('wind_speed')}</span>
          <span className="detail-value">
            {new Intl.NumberFormat(i18n.language, { 
              maximumFractionDigits: 1 
            }).format(wind.speed)} m/s
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">{t('min_temp')}</span>
          <span className="detail-value">
            {formatTemperature(main.temp_min, i18n.language, unit)}
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">{t('max_temp')}</span>
          <span className="detail-value">
            {formatTemperature(main.temp_max, i18n.language, unit)}
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">{t('sunrise')}</span>
          <span className="detail-value">
            {formatTime(sys.sunrise, i18n.language)}
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">{t('sunset')}</span>
          <span className="detail-value">
            {formatTime(sys.sunset, i18n.language)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
