// NavBar.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'zh-CN', name: '简体中文' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === i18n.language)?.name || 
           languages.find(lang => lang.code === 'en')?.name;
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <a href="/">{t('nav.home')}</a>
          <a href="/about">{t('nav.about')}</a>
          <a href="/contact">{t('nav.contact')}</a>
        </div>
        
        <div className="nav-actions">
          <button className="auth-button login">{t('nav.login')}</button>
          <button className="auth-button signup">{t('nav.signup')}</button>
          
          <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
            <button 
              className="language-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
              {getCurrentLanguageName()}
              <span className="arrow-down">▼</span>
            </button>
            
            {isOpen && (
              <div className="dropdown-content">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? 'active' : ''}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

