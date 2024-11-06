// NavBar.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'zh-CN', name: '简体中文' },
    { code: 'jp', name: '日本語' },
    { code: 'ko', name: '한국어' }
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
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          {/* <Link to="/contact">{t('nav.contact')}</Link> */}
        </div>
        
        <div className="nav-actions">
          {/* <Link to="/login" className="auth-button login">{t('nav.login')}</Link>
          <Link to="/signup" className="auth-button signup">{t('nav.signup')}</Link> */}
          
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

