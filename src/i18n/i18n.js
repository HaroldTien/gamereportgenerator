import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json';
import zhTWTranslations from './translations/zh-TW.json';
import zhCNTranslations from './translations/zh-CN.json';
import jpTranslations from './translations/jp.json';
import koTranslations from './translations/ko.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      'zh-TW': {
        translation: zhTWTranslations
      },
      'zh-CN': {
        translation: zhCNTranslations
      },
      jp: {
        translation: jpTranslations
      },
      ko: {
        translation: koTranslations
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 