import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import { en, cs } from './resources';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      cs,
    },
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'cs'],
    defaultNS: 'common',
    detection: {
      order: ['path', 'querystring', 'localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });
