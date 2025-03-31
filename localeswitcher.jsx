import React from 'react';
import { useTranslation } from 'react-i18next';

const LocaleSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="locale-switcher">
      <p>{t('select_language')}:</p>
      <div className="language-buttons">
        <button
          className={i18n.language === 'en' ? 'active' : ''}
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          className={i18n.language === 'fr' ? 'active' : ''}
          onClick={() => changeLanguage('fr')}
        >
          Français
        </button>
        <button
          className={i18n.language === 'jp' ? 'active' : ''}
          onClick={() => changeLanguage('jp')}
        >
          日本語
        </button>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
