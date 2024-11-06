import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RenderTimeGroup from './RenderTimeGroup.jsx';
import RenderSpecificPurpose from './RenderSpecificPurpose.jsx';
import {useNavigate} from 'react-router-dom';
import './Get-started.css';

function GetStarted() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState('');
  const [reportType, setReportType] = useState('');
  const [audience, setAudience] = useState({
    person: '',
    purpose: ''
  });
  const [customNeeds, setCustomNeeds] = useState('');
  const [gameDetails, setGameDetails] = useState({
    gameId: '',
    gameDate: new Date().toISOString().split('T')[0],
    startTime: '12:00',
    gameDuration: '1'
  });

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setGameDetails(prev => ({
      ...prev,
      gameDate: today
    }));
  }, []);

  const games = ['pubg', 'lol'];
  const audiences = ['gf', 'dad', 'mom'];

  const handleGenerateReport = () => {
    // Store parameters in localStorage before navigating
    const params = {
      gameDetails,
      reportType,
      audience,
      customNeeds,
      selectedGame
    };
    console.log(params);
    localStorage.setItem('reportParams', JSON.stringify(params));
    navigate('/text-editor');
  };

  const handleGameDetailsChange = (field, value) => {
    setGameDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderGameSpecificFields = () => {
    if (!selectedGame || !reportType) return null;

    return (
      <div className="game-details-section slide-down">
        {selectedGame === 'lol' && (
          <>
            <div className="input-group">
              <label>{t('getStarted.gameDetails.summonerName')}</label>
              <input
                type="text"
                value={gameDetails.gameId}
                onChange={(e) => handleGameDetailsChange('gameId', e.target.value)}
                placeholder={t('getStarted.gameDetails.gameIdPlaceholder')}
                className="detail-input"
              />
            </div>
            <RenderTimeGroup reportType={reportType} gameDetails={gameDetails} handleGameDetailsChange={handleGameDetailsChange} />
          </>
        )}
        {selectedGame === 'pubg' && (
          <>
            <div className="input-group">
              <label>{t('getStarted.gameDetails.gameId')}</label>
              <input
                type="text"
                value={gameDetails.gameId}
                onChange={(e) => handleGameDetailsChange('gameId', e.target.value)}
                placeholder={t('getStarted.gameDetails.gameIdPlaceholder')}
                className="detail-input"
              />
            </div>
            <RenderTimeGroup reportType={reportType} gameDetails={gameDetails} handleGameDetailsChange={handleGameDetailsChange} />

          </>
        )}
      </div>
    );
  };

  return (
    <div className="get-started-container">
      <h1>{t('getStarted.title')}</h1>

      <div className="section">
        <h2>{t('getStarted.gameSelection.title')}</h2>
        <div className="selection-grid">
          {games.map((game) => (
            <button
              key={game}
              className={`selection-button ${selectedGame === game ? 'active' : ''}`}
              onClick={() => setSelectedGame(game)}
            >
              {t(`getStarted.games.${game}`)}
            </button>
          ))}
        </div>
      </div>

      {selectedGame && (
        <div className="section slide-down">
          <h2>{t('getStarted.reportType.title')}</h2>
          <div className="selection-grid">
            <button
              className={`selection-button ${reportType === 'concluded' ? 'active' : ''}`}
              onClick={() => setReportType('concluded')}
            >
              {t('getStarted.reportType.concluded')}
            </button>
            <button
              className={`selection-button ${reportType === 'planning' ? 'active' : ''}`}
              onClick={() => setReportType('planning')}
            >
              {t('getStarted.reportType.planning')}
            </button>
          </div>
        </div>
      )}

      {renderGameSpecificFields()}

      <div className="section">
        <h2>{t('getStarted.audience.title')}</h2>
        <div className="selection-grid">
          {audiences.map((person) => (
            <button
              key={person}
              className={`selection-button ${audience.person === person ? 'active' : ''}`}
              onClick={() => setAudience({...audience, person})}
            >
              {t(`getStarted.audiences.${person}`)}
            </button>
          ))}
        </div>
      </div>

      {(selectedGame && reportType && audience.person) ? (
        <RenderSpecificPurpose audience={audience} setAudience={setAudience} reportType={reportType} />
      ) : null}

      <div className="section">
        <h2>{t('getStarted.customNeeds.title')}</h2>
        <textarea
          className="custom-needs-input"
          value={customNeeds}
          onChange={(e) => setCustomNeeds(e.target.value)}
          placeholder={t('getStarted.customNeeds.placeholder')}
          rows="4"
        />
      </div>



      <button className="generate-button" onClick={handleGenerateReport}>
        {t('getStarted.generate')}
      </button>
    </div>
  );
}

export default GetStarted;
