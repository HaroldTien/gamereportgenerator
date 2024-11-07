import React from 'react';
import './loadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Generating report... It could take a while...</p>
    </div>
  );
};

export default LoadingAnimation;
