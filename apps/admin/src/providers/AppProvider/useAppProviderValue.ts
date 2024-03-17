import { useEffect, useState } from 'react';
import { ThemeMode } from '../../types';
import { themeModeKeys } from '../../enums';
import { LOCAL_STORAGE_SIDEBAR_OPEN, LOCAL_STORAGE_THEME_MODE_KEY } from '../../constants';

export const useAppProviderValue = () => {
  const [mode, setMode] = useState<ThemeMode>(themeModeKeys.light);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const setModeHandler = (mode: ThemeMode) => {
    setMode(mode);
    localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, mode);
  };
  const setSidebarOpenHandler = (open: boolean) => {
    setSidebarOpen(open);
    localStorage.setItem(LOCAL_STORAGE_SIDEBAR_OPEN, String(open));
  };

  useEffect(() => {
    const ls_mode = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode;
    const ls_sidebar = localStorage.getItem(LOCAL_STORAGE_SIDEBAR_OPEN);

    if (ls_mode) setMode(ls_mode);
    if (ls_sidebar) setSidebarOpen(ls_sidebar === 'true');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    mode,
    setMode: setModeHandler,
    sidebarOpen,
    setSidebarOpen: setSidebarOpenHandler,
  };
};
