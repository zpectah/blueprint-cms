import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { useTranslationsTranslations } from '../../hooks';
import { ViewLayout } from '../../components';
import { TranslationsContextProvider } from './context';
import { useTranslationsContextValue } from './hooks';
import { TranslationsList } from './TranslationsList';
import { TranslationsDetail } from './TranslationsDetail';

const Translations = () => {
  const { t, mt } = useTranslationsTranslations();
  const providerValue = useTranslationsContextValue();

  return (
    <TranslationsContextProvider value={providerValue}>
      <ViewLayout
        title={mt['page.title']}
        subtitle={mt['page.subtitle']}
        meta={{
          title: mt['page.meta.title'],
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.translations.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.translations_new')}
          </Button>
        }
      >
        <TranslationsList />
        <TranslationsDetail />
      </ViewLayout>
    </TranslationsContextProvider>
  );
};

export default Translations;
