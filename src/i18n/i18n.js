import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './translations/en.json';
import zhTWTranslations from './translations/zh-TW.json';
import zhCNTranslations from './translations/zh-CN.json';
import jpTranslations from './translations/jp.json';
import koTranslations from './translations/ko.json';

const savedLanguage = localStorage.getItem('userLanguage') || 'zh-TW';

i18n
  .use(LanguageDetector)
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
    lng: savedLanguage,
    fallbackLng: 'zh-TW',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'userLanguage',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('userLanguage', lng);
  document.documentElement.lang = lng;
});

export default i18n;

