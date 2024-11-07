import React from 'react';
import { useTranslation } from 'react-i18next';
import GreatLeaderImage from '../../../resources/pictures/GreatLeader.png';
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
              <h3>{t('about.team.member1.name')}</h3>
              <p>{t('about.team.member1.role')}</p>
              <img 
                src={GreatLeaderImage} 
                alt="Developer Profile" 
                className="team-member-photo"
              />
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>{t('about.contact.title')}</h2>
          <p><i className="fas fa-envelope"></i> {t('about.contact.email')}: <a href="mailto:a142758369@gmail.com">a142758369@gmail.com</a></p>

        </section>
      </div>
    </div>
  );
}

export default About;
