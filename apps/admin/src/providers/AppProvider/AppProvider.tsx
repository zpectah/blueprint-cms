import React from 'react';
import { deepmerge } from '@mui/utils';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { WithChildren } from '@blueprint/types';
import { AppContextProvider } from '../../contexts';
import { getDesignTokens } from '../../styles';
import { useAppProviderValue } from './useAppProviderValue';

type AppProviderProps = WithChildren;

const AppProvider = ({ children }: AppProviderProps) => {
  const { mode, setMode, sidebarOpen, setSidebarOpen, spotlightOpen, setSpotlightOpen } = useAppProviderValue();

  const theme = deepmerge({ palette: { mode } }, getDesignTokens(mode));

  return (
    <AppContextProvider
      value={{
        mode,
        setMode,
        sidebarOpen,
        setSidebarOpen,
        spotlightOpen,
        setSpotlightOpen,
      }}
    >
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default AppProvider;
