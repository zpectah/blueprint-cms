import React from 'react';
import AppRouter from './AppRouter';
import { AppProvider } from '../providers';
import { ErrorBoundary } from '../components';
import '../i18n';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

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
