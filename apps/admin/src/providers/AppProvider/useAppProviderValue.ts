import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeMode } from '../../types';
import { themeModeKeys } from '../../enums';
import {
  LANG_DEFAULT,
  LOCAL_STORAGE_LANG_KEY,
  LOCAL_STORAGE_SIDEBAR_OPEN_KEY,
  LOCAL_STORAGE_THEME_MODE_KEY,
} from '../../constants';

export const useAppProviderValue = () => {
  const [mode, setMode] = useState<ThemeMode>(themeModeKeys.light);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [spotlightOpen, setSpotlightOpen] = useState<boolean>(false);
  const [lang, setLang] = useState(LANG_DEFAULT);

  const { i18n } = useTranslation();

  const setModeHandler = (mode: ThemeMode) => {
    setMode(mode);
    localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, mode);
  };
  const setSidebarOpenHandler = (open: boolean) => {
    setSidebarOpen(open);
    localStorage.setItem(LOCAL_STORAGE_SIDEBAR_OPEN_KEY, String(open));
  };

  const setLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      setLang(lang);
      localStorage.setItem(LOCAL_STORAGE_LANG_KEY, lang);
    });
  };

  useEffect(() => {
    const ls_mode = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode;
    const ls_sidebar = localStorage.getItem(LOCAL_STORAGE_SIDEBAR_OPEN_KEY);
    const ls_lang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);

    if (ls_mode) setModeHandler(ls_mode);
    if (ls_sidebar) setSidebarOpenHandler(ls_sidebar === 'true');
    if (ls_lang) setLanguageHandler(ls_lang);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    mode,
    setMode: setModeHandler,
    sidebarOpen,
    setSidebarOpen: setSidebarOpenHandler,
    spotlightOpen,
    setSpotlightOpen,
    lang,
    setLang: setLanguageHandler,
  };
};
