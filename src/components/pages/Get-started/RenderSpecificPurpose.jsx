import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const purposesOptions={
    concluded: ['sharePlaying'],
    planning: ['askToPlay', 'askPermission']
}

const RenderSpecificPurpose = (props) => { 
    const {person} = props.audience;
    const setAudience = props.setAudience;
    const reportType = props.reportType;
    const [selectedPurpose, setSelectedPurpose] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);
    const { t } = useTranslation();
    const handleClick = (purpose) => {
        setAudience(prev => ({...prev, purpose}));
        setSelectedPurpose(purpose);
    }
    return (
        <div className="section slide-down">
            <h3>{t(`getStarted.purposes.title`)}</h3>
            <div className="selection-grid">
                {purposesOptions[reportType].map((purpose) => (
                    <button
                        key={purpose}
                        className={`selection-button ${selectedPurpose === purpose ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredButton(purpose)}  
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => {
                            if (selectedPurpose === purpose) {
                                setSelectedPurpose(null);
                                setAudience(prev => ({...prev, purpose: null}));
                            } else {
                                handleClick(purpose);
                            }
                        }}
                    >
                        {t(`getStarted.purposes.${purpose}`)}
                        {hoveredButton === purpose && (
                            <div className="purpose-detail">
                                {t(`getStarted.purposeDetails.${purpose}.${person}.${reportType}`)}
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
};

export default RenderSpecificPurpose;