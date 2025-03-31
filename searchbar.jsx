import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWeather } from '../contexts/WeatherContext';

const SearchBar = () => {
  const { t } = useTranslation();
  const { searchCity } = useWeather();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      searchCity(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={t('search_placeholder')}
        aria-label={t('search_aria_label')}
      />
      <button type="submit" aria-label={t('search_button_aria_label')}>
        {t('search')}
      </button>
    </form>
  );
};

export default SearchBar;
