import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Get-started.css';

function GetStarted() {
  const { t } = useTranslation();
  const [selectedGame, setSelectedGame] = useState('');
  const [reportType, setReportType] = useState('');
  const [audience, setAudience] = useState('');
  const [customNeeds, setCustomNeeds] = useState('');
  const [gameDetails, setGameDetails] = useState({
    summonerName: '',
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

  const handleGameDetailsChange = (field, value) => {
    setGameDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderGameSpecificFields = () => {
    if (!selectedGame || !reportType) return null;

    const renderTimeGroup = () => (
      <div className="input-group time-group">
        <div className="date-input">
          <label>{t(reportType === 'planning' ? 'getStarted.gameDetails.expectGameDate' : 'getStarted.gameDetails.gameDate')}</label> 
          <input
            type="date"
            value={gameDetails.gameDate}
            onChange={(e) => handleGameDetailsChange('gameDate', e.target.value)}
            className="detail-input"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="time-input">
          <label>{t(reportType === 'planning' ? 'getStarted.gameDetails.expectStartTime' : 'getStarted.gameDetails.startTime')}</label>
          <input
            type="time"
            value={gameDetails.startTime}
            onChange={(e) => handleGameDetailsChange('startTime', e.target.value)}
            className="detail-input"
          />
        </div>
        <div className="duration-input">
          <label>{t(reportType === 'planning' ? 'getStarted.gameDetails.expectGameDuration' : 'getStarted.gameDetails.gameDuration')}</label>
          <div className="duration-select-wrapper">
            <select
              value={gameDetails.gameDuration}
              onChange={(e) => handleGameDetailsChange('gameDuration', e.target.value)}
              className="detail-input"
            >
              <option value="0.5">30 {t('getStarted.gameDetails.minutes')}</option>
              <option value="1">1 {t('getStarted.gameDetails.hour')}</option>
              <option value="2">2 {t('getStarted.gameDetails.hours')}</option>
              <option value="3">3 {t('getStarted.gameDetails.hours')}</option>
            </select>
          </div>
        </div>
      </div>
    );

    return (
      <div className="game-details-section slide-down">
        {selectedGame === 'lol' && (
          <>
            <div className="input-group">
              <label>{t('getStarted.gameDetails.summonerName')}</label>
              <input
                type="text"
                value={gameDetails.summonerName}
                onChange={(e) => handleGameDetailsChange('summonerName', e.target.value)}
                placeholder={t('getStarted.gameDetails.summonerNamePlaceholder')}
                className="detail-input"
              />
            </div>
            {renderTimeGroup()}
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
            {renderTimeGroup()}

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
              className={`selection-button ${audience === person ? 'active' : ''}`}
              onClick={() => setAudience(person)}
            >
              {t(`getStarted.audiences.${person}`)}
            </button>
          ))}
        </div>
      </div>

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

      <button className="generate-button">
        {t('getStarted.generate')}
      </button>
    </div>
  );
}

export default GetStarted;
