import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorMessage = ({ errorCode }) => {
  const { t } = useTranslation();
  
  // Map error codes to translation keys
  const errorMap = {
    'city_not_found': 'error_city_not_found',
    'api_error': 'error_api',
    'geolocation_failed': 'error_geolocation_failed',
    'geolocation_denied': 'error_geolocation_denied',
    'geolocation_error': 'error_geolocation_general',
    'geolocation_not_supported': 'error_geolocation_not_supported'
  };
  
  const translationKey = errorMap[errorCode] || 'error_unknown';
  
  return (
    <div className="error-message">
      <div className="error-icon">⚠️</div>
      <p>{t(translationKey)}</p>
      <p className="error-help">{t('error_help')}</p>
    </div>
  );
};

export default ErrorMessage;
