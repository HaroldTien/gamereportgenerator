import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh-TW')}>繁體中文</button>
      <button onClick={() => changeLanguage('zh-CN')}>简体中文</button>
    </div>
  );
};

export default LanguageSwitcher; 