import { HfInference } from '@huggingface/inference';
import i18next from 'i18next';

const commandCovertion = {
  selectedGame: {
    'lol': 'League of Legends',
    'pubg': 'PUBG'
  },
  reportType: {
    'planning': 'a planning report',
    'concluded': 'a concluded report'
  },
  audience: {
    'gf': 'girl friend',
    'dad': 'dad',
    'mom': 'mom',
    'coach': 'coach',
    'classmate': 'classmate',
    'self': 'self'
  },
  purpose: {
    'askPermission': 'ask permission for a game',
    'sharePlaying': 'share playing experience',
    'shareStrategy': 'share strategy',
    'askToPlay':'invite to play together'
  }
}

class ReportService {
  constructor() {
    console.log('reportService constructor running');
    this.hf = new HfInference('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');
  }

  getLanguageFromI18n() {
    const currentLang = i18next.language;
    const languageMap = {
      'en': 'English',
      'zh-TW': '繁體中文',
      'zh-CN': '簡體中文',
      'ja': 'Japanese',
      'ko': 'Korean'
    };
    return languageMap[currentLang] || 'English';
  }

  constructPrompt(gameDetails, reportType, audience, customNeeds, selectedGame) {
    const outputLanguage = this.getLanguageFromI18n();
    let prompt = '';
    if (selectedGame === 'lol') {
        prompt = `You must respond only in ${outputLanguage}. ` +
                 `Generate a ${commandCovertion.reportType[reportType]} League of Legends game report. ` +
                 `Summoner Name: ${gameDetails.gameId}. ` +
                 `Game Date: ${gameDetails.gameDate}. ` +
                 `Game Duration: ${gameDetails.gameDuration} hours. ` +
                 `Time: ${gameDetails.startTime}. ` +
                 `Writing for: ${commandCovertion.audience[audience.person]}. ` +
                 `Purpose: ${commandCovertion.purpose[audience.purpose]}. ` +
                 `Special Requirements: ${customNeeds} ` +
                 `Please write a detailed ${reportType} report in ${outputLanguage} for a League of Legends game that is appropriate for ${commandCovertion.audience[audience.person]}.`;
    } else if (selectedGame === 'pubg') {
        prompt = `You must respond only in ${outputLanguage}. ` +
                 `Generate a ${commandCovertion.reportType[reportType]} PUBG game report. ` +
                 `Player ID: ${gameDetails.gameId}. ` +
                 `Game Date: ${gameDetails.gameDate}. ` +
                 `Game Duration: ${gameDetails.gameDuration} hours. ` +
                 `Time: ${gameDetails.startTime}. ` +
                 `Writing for: ${commandCovertion.audience[audience.person]}. ` +
                 `Purpose: ${commandCovertion.purpose[audience.purpose]}. ` +
                 `Special Requirements: ${customNeeds}. ` +
                 `Please write a detailed ${reportType} report in ${outputLanguage} for a PUBG game that is appropriate for my ${commandCovertion.audience[audience.person] }.`;
    }
    return prompt;
  }

  async generateReport(gameDetails, reportType, audience, customNeeds, selectedGame) {
    if(!gameDetails || !reportType || !audience || !customNeeds || !selectedGame){
      console.error('Missing required parameters for prompt construction');
      return '';
    }
    try {
      const prompt = this.constructPrompt(gameDetails, reportType, audience, customNeeds, selectedGame);
      console.log("the input prompt is: ", prompt);
      const response = await this.hf.textGeneration({
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        inputs: prompt,
        parameters: {
          max_new_tokens: 1000,
          min_new_tokens: 500,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.15
        }
      });
      console.log("the response is: ", response.generated_text);
      return response.generated_text;
    } catch (error) {
      console.error('Error in report generation:', error);
      throw new Error('Failed to generate report');
    }
  }
}

export default new ReportService(); 