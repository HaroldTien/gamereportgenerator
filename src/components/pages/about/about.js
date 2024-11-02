import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>{t('about.title')}</h1>
        
        <section className="purpose-section">
          <h2>{t('about.purpose.title')}</h2>
          <p>{t('about.purpose.description')}</p>
        </section>

        <section className="features-section">
          <h2>{t('about.features.title')}</h2>
          <ul>
            <li>{t('about.features.item1')}</li>
            <li>{t('about.features.item2')}</li>
            <li>{t('about.features.item3')}</li>
            <li>{t('about.features.item4')}</li>
            <li>{t('about.features.item5')}</li>
          </ul>
        </section>

        <section className="team-section">
          <h2>{t('about.team.title')}</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="team-member">
              <h3>Mike Johnson</h3>
              <p>Backend Developer</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>{t('about.contact.title')}</h2>
          <p>{t('about.contact.description')}</p>
          <a href="mailto:your-email@example.com" className="contact-button">
            {t('about.contact.button')}
          </a>
        </section>
      </div>
    </div>
  );
}

export default About;
