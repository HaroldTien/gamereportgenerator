import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en.json';
import zhTWTranslations from './translations/zh-TW.json';
import zhCNTranslations from './translations/zh-CN.json';
import jpTranslations from './translations/jp.json';
import koTranslations from './translations/ko.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
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
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh-TW', 'zh-CN', 'jp', 'ko'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 