import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="home-container">
      <h1>{t('home.welcome')}</h1>
      
      <div className="section">
        <h2>{t('home.about.title')}</h2>
        <p className="description">{t('home.about.description')}</p>
      </div>

      <div className="section">
        <h2>{t('home.howToUse.title')}</h2>
        <ol className="instructions-list">
          <li>{t('home.howToUse.steps.1')}</li>
          <li>{t('home.howToUse.steps.2')}</li>
          <li>{t('home.howToUse.steps.3')}</li>
          <li>{t('home.howToUse.steps.4')}</li>
          <li>{t('home.howToUse.steps.5')}</li>
        </ol>
      </div>

      <div className="section">
        <h2>{t('home.features.title')}</h2>
        <ul className="features-list">
          <li className="feature-item">{t('home.features.list.1')}</li>
          <li className="feature-item">{t('home.features.list.2')}</li>
          <li className="feature-item">{t('home.features.list.3')}</li>
          <li className="feature-item">{t('home.features.list.4')}</li>
        </ul>
      </div>

      <button className="get-started-button" onClick={handleGetStarted}>
        {t('home.getStarted')}
      </button>
    </div>
  );
}

export default Home;
