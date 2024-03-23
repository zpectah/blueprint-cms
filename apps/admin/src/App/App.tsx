import React from 'react';
import AppRouter from './AppRouter';
import { AppProvider } from '../providers';
import { ErrorBoundary } from '../components';
import '../i18n';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

const App = () => {
  return (
    <AppProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </AppProvider>
  );
};

export default App;
