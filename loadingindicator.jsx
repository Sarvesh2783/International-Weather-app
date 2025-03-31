import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingIndicator = () => {
  const { t } = useTranslation();
  
  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p>{t('loading')}</p>
    </div>
  );
};

export default LoadingIndicator;

