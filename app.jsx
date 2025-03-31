import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './utils/i18n';
import { WeatherProvider } from './contexts/WeatherContext';
import LocaleSwitcher from './components/LocaleSwitcher';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingIndicator from './components/LoadingIndicator';

import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <WeatherProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>{t('app_title')}</h1>
          <LocaleSwitcher />
        </header>
        
        <main className="app-content">
          <SearchBar />
          <Suspense fallback={<LoadingIndicator />}>
            <WeatherDisplay />
          </Suspense>
        </main>
        
        <footer className="app-footer">
          <p>{t('powered_by')} OpenWeatherMap API</p>
          <p>&copy; {new Date().getFullYear()} - {t('rights')}</p>
        </footer>
      </div>
    </WeatherProvider>
  );
};

export default App;
