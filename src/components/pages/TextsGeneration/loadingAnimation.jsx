import React from 'react';
import { useTranslation } from 'react-i18next';
import './loadingAnimation.css';

const LoadingAnimation = () => {
  const { t } = useTranslation();
  
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>{t('loading.generating')}</p>
    </div>
  );
};

export default LoadingAnimation;
