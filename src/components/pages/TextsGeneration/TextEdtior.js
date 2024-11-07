import React, { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReportService from './reportService';
import LoadingAnimation from './loadingAnimation';
import './TextEditor.css';


const TextEditor = () => {
    const [text, setText] = useState('');
    const { t } = useTranslation();
    const [inputParams, setInputParams] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGetInputParams = () => {
        try {
            const params = localStorage.getItem('reportParams');
            console.log('Raw params from localStorage:', params); // Debug log
            
            if (!params) {
                console.warn('No params found in localStorage');
                return;
            }
            const parsedParams = JSON.parse(params);
            console.log('Parsed params:', parsedParams); // Debug log
            
            if (parsedParams) {
                setInputParams(parsedParams);
            }
        } catch (error) {
            console.error('Error parsing params from localStorage:', error);
        }
    };

    const fetchAIGeneratedReport = async () => {
        setIsLoading(true);
        try {
            if (inputParams) {
                const { gameDetails, reportType, audience, selectedGame } = inputParams;
                let { customNeeds } = inputParams;
                if(customNeeds === '') customNeeds = 'None';
                if (!gameDetails || !reportType || !audience || !customNeeds || !selectedGame) {
                    console.error('Missing required parameters:', { gameDetails, reportType, audience, customNeeds, selectedGame });
                    return;
                }

                // Pass all parameters to generateReport directly
                const response = await ReportService.generateReport(
                    gameDetails,
                    reportType,
                    audience,
                    customNeeds,
                    selectedGame
                );

                if (response) {
                    setText(response);
                }
            }
        } catch (error) {
            console.error('Error fetching report:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle text submission here
        console.log('Submitted text:', text);
    };

    useEffect(() => {
        handleGetInputParams();
    }, []);
    useEffect(() => {
        console.log('Input params updated:', inputParams); // Debug log
        if (inputParams) {
            fetchAIGeneratedReport();
        }
    }, [inputParams]);

    return (
        <div className="text-editor">
        <h2>{t('textEditor.title', 'Text Editor')}</h2>
        {isLoading ? <LoadingAnimation /> : (
        <form onSubmit={handleSubmit}>
            <textarea
            value={text}
            onChange={handleTextChange}
            placeholder={t('textEditor.placeholder', 'Enter your text here...')}
            rows={10}
            className="editor-textarea"
            />
            <button type="submit" className="submit-button">
            {t('textEditor.submit', 'Submit')}
                </button>
            </form>
        )}
        </div>
    );
};

export default TextEditor;
