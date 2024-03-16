import React, { useState } from 'react';
import { deepmerge } from '@mui/utils';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { ThemeMode, WithChildren } from '../../types';
import { themeModeKeys } from '../../enums';
import { AppContextProvider } from '../../contexts';
import { getDesignTokens } from '../../styles';

export type AppProviderProps = WithChildren;

const AppProvider = ({ children }: AppProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(themeModeKeys.light);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const mergedTheme = deepmerge({ palette: { mode } }, getDesignTokens(mode));
  const appContextValue = {
    mode,
    setMode,
    sidebarOpen,
    setSidebarOpen,
  };

  return (
    <AppContextProvider value={appContextValue}>
      <ThemeProvider theme={createTheme(mergedTheme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default AppProvider;
