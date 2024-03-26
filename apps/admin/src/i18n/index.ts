import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { IS_DEBUG } from '../config';
import { LANG_DEFAULT, LANG_LIST, LOCAL_STORAGE_LANG_KEY } from '../constants';
import { en, cs } from './resources';

const lang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);

i18n.use(initReactI18next).init({
  resources: {
    en,
    cs,
  },
  debug: IS_DEBUG,
  lng: lang ?? LANG_DEFAULT,
  fallbackLng: LANG_DEFAULT,
  supportedLngs: LANG_LIST,
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});
