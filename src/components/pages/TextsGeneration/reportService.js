import { HfInference } from '@huggingface/inference';
import i18next from 'i18next';
import Script from './promptScript';


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

  removePromptTags(text) {
    if (!text) return '';
    const regex = /->(.*?)<-/s; // s flag allows . to match newlines
    return text.replace(regex, '').trim();
  }

  async generateReport(gameDetails, reportType, audience, customNeeds, selectedGame) {
    if(!gameDetails || !reportType || !audience || !customNeeds || !selectedGame){
      console.error('Missing required parameters for prompt construction');
      return '';
    }
    try {
      const prompt = Script(gameDetails, reportType, audience, customNeeds, selectedGame, i18next.language);
      console.log("the prompt is: ", prompt);
      const response = await this.hf.textGeneration({
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        inputs: prompt,
        parameters: {
          max_new_tokens: 1000,
          min_new_tokens: 500,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.15
        },
        language: i18next.language
      });
      console.log(this.removePromptTags(response.generated_text));
      return this.removePromptTags(response.generated_text);
    } catch (error) {
      console.error('Error in report generation:', error);
      throw new Error('Failed to generate report');
    }
  }
}

export default new ReportService(); 