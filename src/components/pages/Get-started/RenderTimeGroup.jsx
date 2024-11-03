import { useTranslation } from 'react-i18next';

const RenderTimeGroup = ({ reportType, gameDetails, handleGameDetailsChange }) => {
    const { t } = useTranslation();
    
    return (
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
};

export default RenderTimeGroup; 